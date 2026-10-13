/**
 * AeroShards — an instanced WebGL shard field used as the site-wide background.
 *
 * Design notes
 * ------------
 * • One InstancedMesh, one draw call. All per-shard motion (stream/drift/orbit,
 *   turbulence, spin, pointer repulsion) happens in the vertex shader, so the
 *   CPU does nothing per frame but update a handful of uniforms.
 * • Bloom, glow and chromatic aberration are approximated *in the fragment
 *   shader* rather than through an EffectComposer post chain. For a background
 *   the visual difference is negligible and it avoids pulling three's
 *   postprocessing modules (and a second render target) into the bundle.
 * • The component owns nothing global: every listener, frame, geometry,
 *   material and the renderer itself are released in the effect cleanup.
 *
 * Interaction is tracked on `window`, deliberately. The visual wrapper is
 * `pointer-events: none` so it can never intercept a click, so the canvas
 * cannot receive pointer events of its own.
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type Placement = 'full' | 'top' | 'bottom' | 'center' | 'sides';
export type Flow = 'stream' | 'drift' | 'orbit' | 'still';
export type Material = 'pearl' | 'glass' | 'metal' | 'matte';
export type Detail = 'low' | 'balanced' | 'high';
export type Effect = 'none' | 'ripple' | 'pulse';
export type Interaction = 'none' | 'repel' | 'attract';

export interface AeroShardsProps {
  backgroundColor?: string;
  shardColor?: string;
  accentColor?: string;
  placement?: Placement;
  flow?: Flow;
  material?: Material;
  detail?: Detail;
  effect?: Effect;
  scale?: number;
  spread?: number;
  depth?: number;
  speed?: number;
  spin?: number;
  interaction?: Interaction;
  density?: number;
  shardSize?: number;
  stretch?: number;
  turbulence?: number;
  glow?: number;
  edgeSoftness?: number;
  bloom?: number;
  grain?: number;
  chromaticAberration?: number;
  transitionDuration?: number;
  interactionRadius?: number;
  interactionStrength?: number;
  rippleIntensity?: number;
  holdToGather?: boolean;
  /** Renders exactly one frame and never starts a loop. */
  staticFrame?: boolean;
  /** Upper bound on devicePixelRatio. Lower on phones to protect fill rate. */
  maxPixelRatio?: number;
  /** Multiplies the final alpha — lets inner pages calm the effect down. */
  opacity?: number;
  /**
   * Additive blending only reads correctly on a dark ground; on a light one it
   * blows out to white. The light theme therefore composites normally.
   */
  blendMode?: 'additive' | 'normal';
  className?: string;
  onFailure?: () => void;
}

/** Base instance counts before `density` is applied. */
const DETAIL_COUNT: Record<Detail, number> = { low: 90, balanced: 190, high: 320 };
const FLOW_MODE: Record<Flow, number> = { stream: 0, drift: 1, orbit: 2, still: 3 };
const PLACEMENT_MODE: Record<Placement, number> = {
  full: 0,
  top: 1,
  bottom: 2,
  center: 3,
  sides: 4,
};
/** x = specular sharpness, y = rim/fresnel weight, z = base opacity. */
const MATERIAL_PARAMS: Record<Material, THREE.Vector3> = {
  pearl: new THREE.Vector3(22, 1.0, 0.62),
  glass: new THREE.Vector3(48, 1.35, 0.4),
  metal: new THREE.Vector3(80, 0.55, 0.85),
  matte: new THREE.Vector3(6, 0.35, 0.7),
};
const EFFECT_MODE: Record<Effect, number> = { none: 0, ripple: 1, pulse: 2 };

const vertexShader = /* glsl */ `
  precision highp float;

  attribute vec4 aRandom;   // four decorrelated seeds per shard
  attribute vec3 aBase;     // home position in a unit box
  attribute float aSize;

  uniform float uTime;
  uniform float uSpeed;
  uniform float uSpin;
  uniform float uScale;
  uniform float uSpread;
  uniform float uDepth;
  uniform float uShardSize;
  uniform float uStretch;
  uniform float uTurbulence;
  uniform int   uFlow;
  uniform int   uPlacement;
  uniform int   uEffect;
  uniform float uRipple;

  uniform vec3  uPointer;   // xy in world units, z = 1 while pointer is active
  uniform float uInteract;  // -1 attract, 0 off, +1 repel
  uniform float uRadius;
  uniform float uStrength;
  uniform float uGather;    // 0..1, ramps while the pointer is held down
  uniform float uIntro;     // 0..1 entry transition

  varying vec3  vNormal;
  varying vec3  vViewDir;
  varying float vDepthFade;
  varying float vSeed;
  varying float vEnergy;

  const float TAU = 6.2831853;

  mat3 axisAngle(vec3 axis, float angle) {
    float s = sin(angle), c = cos(angle);
    float t = 1.0 - c;
    vec3 a = normalize(axis);
    return mat3(
      t * a.x * a.x + c,       t * a.x * a.y - s * a.z, t * a.x * a.z + s * a.y,
      t * a.x * a.y + s * a.z, t * a.y * a.y + c,       t * a.y * a.z - s * a.x,
      t * a.x * a.z - s * a.y, t * a.y * a.z + s * a.x, t * a.z * a.z + c
    );
  }

  void main() {
    vSeed = aRandom.x;

    // ---- home position, shaped by placement -----------------------------
    vec3 home = aBase;
    if (uPlacement == 1) home.y = home.y * 0.5 + 0.5;        // top
    else if (uPlacement == 2) home.y = home.y * 0.5 - 0.5;   // bottom
    else if (uPlacement == 3) home.xy *= 0.6;                // center
    else if (uPlacement == 4) {                              // sides
      float side = aRandom.y < 0.5 ? -1.0 : 1.0;
      home.x = side * (0.55 + abs(home.x) * 0.45);
    }
    home *= vec3(uSpread, uSpread, uDepth);
    home *= 14.0 * uScale;

    // ---- flow ------------------------------------------------------------
    float t = uTime * uSpeed;
    vec3 pos = home;

    if (uFlow == 0) {
      // stream: a slow rise, wrapped so the field never empties
      float span = 28.0 * uSpread;
      pos.y = mod(home.y + t * (0.6 + aRandom.z * 0.9) + span * 0.5, span) - span * 0.5;
    } else if (uFlow == 1) {
      // drift: gentle lissajous wander around home
      pos.x += sin(t * 0.35 + aRandom.x * TAU) * 1.6;
      pos.y += cos(t * 0.28 + aRandom.y * TAU) * 1.6;
    } else if (uFlow == 2) {
      // orbit: rotate the whole field about its centre
      float a = t * 0.12 + aRandom.w * TAU;
      float r = length(home.xy);
      pos.xy = vec2(cos(a), sin(a)) * r;
    }
    // uFlow == 3 (still): home position, turbulence only

    // ---- turbulence -------------------------------------------------------
    if (uTurbulence > 0.0) {
      vec3 wob = vec3(
        sin(t * 0.7 + aRandom.x * TAU + home.y * 0.12),
        cos(t * 0.6 + aRandom.y * TAU + home.x * 0.12),
        sin(t * 0.5 + aRandom.z * TAU)
      );
      pos += wob * uTurbulence * 0.9;
    }

    // ---- pointer interaction ---------------------------------------------
    // Repel (or attract) in screen-parallel XY. uGather inverts the sign so
    // press-and-hold pulls the field toward the cursor.
    float energy = 0.0;
    if (uInteract != 0.0 && uPointer.z > 0.5) {
      vec2 delta = pos.xy - uPointer.xy;
      float dist = length(delta);
      float radius = uRadius * 7.0;
      float falloff = 1.0 - smoothstep(0.0, radius, dist);
      float sign = mix(uInteract, -abs(uInteract), uGather);
      vec2 dir = dist > 0.0001 ? delta / dist : vec2(0.0, 1.0);
      pos.xy += dir * falloff * uStrength * 6.0 * sign;
      energy = falloff;

      if (uEffect == 1) {
        // ripple: a travelling ring of displacement along view depth
        pos.z += sin(dist * 0.6 - t * 2.4) * falloff * uRipple * 1.4;
      }
    }
    if (uEffect == 2) {
      energy = max(energy, 0.5 + 0.5 * sin(t * 1.6 + aRandom.w * TAU));
    }
    vEnergy = energy;

    // ---- per-shard orientation -------------------------------------------
    vec3 axis = normalize(aRandom.xyz * 2.0 - 1.0 + vec3(0.001));
    float angle = aRandom.w * TAU + t * uSpin * (0.25 + aRandom.z * 0.5);
    mat3 rot = axisAngle(axis, angle);

    // Shards are slivers: long on Y, thin on Z.
    vec3 shape = vec3(1.0, 1.0 + uStretch * 1.6, 0.28);
    float size = aSize * uShardSize * mix(0.35, 1.0, uIntro);

    vec3 local = rot * (position * shape * size);
    vec3 world = pos + local;

    vec4 mv = modelViewMatrix * vec4(world, 1.0);

    vNormal = normalize(rot * normal);
    vViewDir = normalize(-mv.xyz);

    // Depth fade at BOTH ends. The far fade gives the field depth; the near
    // fade matters more — a shard drifting close to the camera would otherwise
    // fill the screen as one huge bloom and wash out the text behind it.
    float viewDist = -mv.z;
    vDepthFade = smoothstep(6.0, 19.0, viewDist) * (1.0 - smoothstep(34.0, 68.0, viewDist));

    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3  uShardColor;
  uniform vec3  uAccentColor;
  uniform vec3  uMaterial;   // x specular power, y rim weight, z base opacity
  uniform float uGlow;
  uniform float uEdgeSoftness;
  uniform float uBloom;
  uniform float uGrain;
  uniform float uAberration;
  uniform float uOpacity;
  uniform float uIntro;

  varying vec3  vNormal;
  varying vec3  vViewDir;
  varying float vDepthFade;
  varying float vSeed;
  varying float vEnergy;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(vViewDir);

    // Facing ratio drives both the rim light and the soft silhouette edge.
    float facing = abs(dot(n, v));
    float fresnel = pow(1.0 - facing, 2.4) * uMaterial.y;

    // Cheap specular from a fixed key light, sharpened by the material.
    vec3 lightDir = normalize(vec3(0.35, 0.8, 0.5));
    float spec = pow(max(dot(reflect(-lightDir, n), v), 0.0), uMaterial.x);

    // Pearl shift: the hue slides between shard and accent with orientation,
    // which is what reads as iridescence when the shard spins.
    float shift = 0.5 + 0.5 * sin(n.y * 2.2 + vSeed * 6.283);
    vec3 base = mix(uShardColor, uAccentColor, clamp(shift + fresnel * 0.45, 0.0, 1.0));

    // Chromatic aberration: separate the channels along the fresnel gradient.
    if (uAberration > 0.0) {
      float a = uAberration * 26.0;
      base.r = mix(base.r, uAccentColor.r, clamp(fresnel * a, 0.0, 1.0));
      base.b = mix(base.b, uShardColor.b, clamp(fresnel * a * 0.75, 0.0, 1.0));
    }

    vec3 color = base * (0.55 + uGlow * 0.5);
    color += spec * uGlow * 0.7;
    color += fresnel * uAccentColor * uBloom * 1.35;   // in-shader bloom stand-in
    color += vEnergy * uAccentColor * 0.35;

    // Soft edges: higher edgeSoftness widens the falloff toward the silhouette.
    float edge = pow(facing, 1.0 / max(uEdgeSoftness, 0.001));
    float alpha = uMaterial.z * mix(0.35, 1.0, edge) * vDepthFade * uOpacity * uIntro;
    alpha *= 0.55 + fresnel * 0.85;

    if (uGrain > 0.0) {
      float g = hash(gl_FragCoord.xy) - 0.5;
      color += g * uGrain;
    }

    if (alpha < 0.003) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function AeroShards({
  backgroundColor = '#120F17',
  shardColor = '#896ABD',
  accentColor = '#A855F7',
  placement = 'full',
  flow = 'stream',
  material = 'pearl',
  detail = 'balanced',
  effect = 'none',
  scale = 1,
  spread = 1,
  depth = 1,
  speed = 1,
  spin = 1,
  interaction = 'repel',
  density = 1.5,
  shardSize = 1.1,
  stretch = 1,
  turbulence = 1,
  glow = 1,
  edgeSoftness = 2,
  bloom = 0.5,
  grain = 0.05,
  chromaticAberration = 0.0075,
  transitionDuration = 1,
  interactionRadius = 1.5,
  interactionStrength = 0.5,
  rippleIntensity = 1,
  holdToGather = true,
  staticFrame = false,
  maxPixelRatio = 2,
  opacity = 1,
  blendMode = 'additive',
  className,
  onFailure,
}: AeroShardsProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  // Props that change every route (opacity, speed…) are read through a ref so
  // they never tear down and rebuild the GPU scene.
  const live = useRef({
    speed,
    spin,
    turbulence,
    glow,
    bloom,
    grain,
    chromaticAberration,
    opacity,
    interactionRadius,
    interactionStrength,
    rippleIntensity,
    holdToGather,
    staticFrame,
  });
  live.current = {
    speed,
    spin,
    turbulence,
    glow,
    bloom,
    grain,
    chromaticAberration,
    opacity,
    interactionRadius,
    interactionStrength,
    rippleIntensity,
    holdToGather,
    staticFrame,
  };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: false,
        antialias: false, // the shards are soft-edged; MSAA buys nothing here
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
      });
    } catch {
      onFailure?.();
      return;
    }
    // Some browsers hand back a renderer whose context is already lost.
    if (!renderer.getContext()) {
      renderer.dispose();
      onFailure?.();
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
    renderer.setClearColor(new THREE.Color(backgroundColor), 1);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.set(0, 0, 26);

    // ---- geometry --------------------------------------------------------
    const count = Math.max(24, Math.round(DETAIL_COUNT[detail] * Math.max(density, 0.05)));
    const shard = new THREE.TetrahedronGeometry(0.5, 0);
    const geometry = new THREE.InstancedBufferGeometry();
    geometry.index = shard.index;
    geometry.attributes.position = shard.attributes.position;
    geometry.attributes.normal = shard.attributes.normal;
    geometry.instanceCount = count;

    const randoms = new Float32Array(count * 4);
    const bases = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      randoms[i * 4 + 0] = Math.random();
      randoms[i * 4 + 1] = Math.random();
      randoms[i * 4 + 2] = Math.random();
      randoms[i * 4 + 3] = Math.random();
      bases[i * 3 + 0] = Math.random() * 2 - 1;
      bases[i * 3 + 1] = Math.random() * 2 - 1;
      bases[i * 3 + 2] = Math.random() * 2 - 1;
      // Bias toward small shards so a few large ones read as foreground.
      sizes[i] = 0.35 + Math.pow(Math.random(), 2.2) * 1.5;
    }
    geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 4));
    geometry.setAttribute('aBase', new THREE.InstancedBufferAttribute(bases, 3));
    geometry.setAttribute('aSize', new THREE.InstancedBufferAttribute(sizes, 1));

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uSpin: { value: spin },
      uScale: { value: scale },
      uSpread: { value: spread },
      uDepth: { value: depth },
      uShardSize: { value: shardSize },
      uStretch: { value: stretch },
      uTurbulence: { value: turbulence },
      uFlow: { value: FLOW_MODE[flow] },
      uPlacement: { value: PLACEMENT_MODE[placement] },
      uEffect: { value: EFFECT_MODE[effect] },
      uRipple: { value: rippleIntensity },
      uPointer: { value: new THREE.Vector3(0, 0, 0) },
      uInteract: { value: interaction === 'repel' ? 1 : interaction === 'attract' ? -1 : 0 },
      uRadius: { value: interactionRadius },
      uStrength: { value: interactionStrength },
      uGather: { value: 0 },
      uIntro: { value: transitionDuration > 0 ? 0 : 1 },
      uShardColor: { value: new THREE.Color(shardColor) },
      uAccentColor: { value: new THREE.Color(accentColor) },
      uMaterial: { value: MATERIAL_PARAMS[material].clone() },
      uGlow: { value: glow },
      uEdgeSoftness: { value: edgeSoftness },
      uBloom: { value: bloom },
      uGrain: { value: grain },
      uAberration: { value: chromaticAberration },
      uOpacity: { value: opacity },
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    mesh.frustumCulled = false; // positions are computed on the GPU
    scene.add(mesh);

    // ---- sizing ----------------------------------------------------------
    const resize = () => {
      const w = host.clientWidth || window.innerWidth;
      const h = host.clientHeight || window.innerHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    // ---- pointer, tracked on window --------------------------------------
    // The wrapper is pointer-events:none, so the canvas never sees events of
    // its own. Listeners are passive and only write to uniforms.
    const pointer = uniforms.uPointer.value;
    const targetPointer = new THREE.Vector2(0, 0);
    let pointerActive = false;
    let gatherTarget = 0;

    /** Convert a client point to the world plane the shards drift on. */
    const toWorld = (clientX: number, clientY: number) => {
      const w = host.clientWidth || window.innerWidth;
      const h = host.clientHeight || window.innerHeight;
      const ndcX = (clientX / w) * 2 - 1;
      const ndcY = -((clientY / h) * 2 - 1);
      const vFov = (camera.fov * Math.PI) / 180;
      const halfH = Math.tan(vFov / 2) * camera.position.z;
      targetPointer.set(ndcX * halfH * camera.aspect, ndcY * halfH);
    };

    const onPointerMove = (e: PointerEvent) => {
      toWorld(e.clientX, e.clientY);
      pointerActive = true;
    };
    const onPointerLeave = () => {
      pointerActive = false;
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!live.current.holdToGather) return;
      toWorld(e.clientX, e.clientY);
      pointerActive = true;
      gatherTarget = 1;
    };
    const onPointerUp = () => {
      gatherTarget = 0;
    };

    const interactive = interaction !== 'none' && !staticFrame;
    if (interactive) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });
      window.addEventListener('pointerup', onPointerUp, { passive: true });
      window.addEventListener('pointercancel', onPointerUp, { passive: true });
      document.addEventListener('pointerleave', onPointerLeave, { passive: true });
    }

    // ---- loop ------------------------------------------------------------
    let frame = 0;
    let running = true;
    const clock = new THREE.Clock();
    let elapsed = 0;

    const renderFrame = () => {
      const l = live.current;
      uniforms.uTime.value = elapsed;
      uniforms.uSpeed.value = l.speed;
      uniforms.uSpin.value = l.spin;
      uniforms.uTurbulence.value = l.turbulence;
      uniforms.uGlow.value = l.glow;
      uniforms.uBloom.value = l.bloom;
      uniforms.uGrain.value = l.grain;
      uniforms.uAberration.value = l.chromaticAberration;
      uniforms.uOpacity.value = l.opacity;
      uniforms.uRadius.value = l.interactionRadius;
      uniforms.uStrength.value = l.interactionStrength;
      uniforms.uRipple.value = l.rippleIntensity;
      renderer.render(scene, camera);
    };

    const tick = () => {
      if (!running) return;
      frame = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05); // clamp after a tab stall
      elapsed += dt;

      // Ease the intro so the field fades in instead of popping.
      if (uniforms.uIntro.value < 1) {
        const step = transitionDuration > 0 ? dt / transitionDuration : 1;
        uniforms.uIntro.value = Math.min(1, uniforms.uIntro.value + step);
      }
      // Smooth the pointer so fast cursor moves do not snap the field.
      pointer.x += (targetPointer.x - pointer.x) * Math.min(1, dt * 6);
      pointer.y += (targetPointer.y - pointer.y) * Math.min(1, dt * 6);
      pointer.z = pointerActive ? 1 : 0;
      uniforms.uGather.value += (gatherTarget - uniforms.uGather.value) * Math.min(1, dt * 5);

      renderFrame();
    };

    if (staticFrame) {
      // Reduced motion: one representative frame, no loop, no interaction.
      uniforms.uIntro.value = 1;
      elapsed = 4;
      renderFrame();
    } else {
      frame = requestAnimationFrame(tick);
    }

    // Stop burning frames (and battery) while the tab is in the background.
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!live.current.staticFrame && !running) {
        running = true;
        clock.getDelta(); // discard the gap so nothing jumps
        frame = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // A lost context must not leave a dead canvas animating forever.
    const onContextLost = (e: Event) => {
      e.preventDefault();
      running = false;
      cancelAnimationFrame(frame);
      onFailure?.();
    };
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      if (interactive) {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
        document.removeEventListener('pointerleave', onPointerLeave);
      }
      scene.remove(mesh);
      geometry.dispose();
      shard.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
    // Structural props only. Visual props are read live through `live.current`,
    // so changing them never rebuilds the scene.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    backgroundColor,
    shardColor,
    accentColor,
    placement,
    flow,
    material,
    detail,
    effect,
    scale,
    spread,
    depth,
    density,
    shardSize,
    stretch,
    edgeSoftness,
    interaction,
    staticFrame,
    maxPixelRatio,
    transitionDuration,
    blendMode,
  ]);

  return <div ref={hostRef} className={className} style={{ width: '100%', height: '100%' }} />;
}
