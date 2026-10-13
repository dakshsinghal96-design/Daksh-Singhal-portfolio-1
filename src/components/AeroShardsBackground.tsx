/**
 * The site's single background instance.
 *
 * Mounted once in the root layout, above <Routes>, so route changes only nudge
 * a couple of props — the canvas is never torn down and rebuilt, and there is
 * never more than one GPU context alive.
 *
 * Rendering degrades through three tiers:
 *   1. WebGPU   — AeroShards (React Bits), the intended effect.
 *   2. WebGL    — AeroShardsWebGL, so Safari and Firefox builds without
 *                 `navigator.gpu` still get an animated field rather than a
 *                 flat panel. Lazy-loaded, so WebGPU browsers never fetch it.
 *   3. CSS      — a palette-matched gradient if neither API initialises.
 *
 * Reduced motion and low-power devices are handled inside each renderer; this
 * component only decides which one runs and how strong it should look.
 */
import { Suspense, lazy, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLowPowerDevice, usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { useTheme } from '../hooks/themeContext';

// Both renderers are split out of the main bundle; the hero paints without them.
const AeroShards = lazy(() => import('./AeroShards.jsx'));
const AeroShardsWebGL = lazy(() => import('./AeroShardsWebGL'));

type Tier = 'webgpu' | 'webgl' | 'css';

/**
 * WebGPU is only worth attempting when the browser actually exposes it.
 * Checked for truthiness rather than with `in`: some environments define the
 * property as undefined, and an `in` test would pass, needlessly downloading
 * the WebGPU renderer before falling back.
 */
const initialTier = (): Tier =>
  typeof navigator !== 'undefined' && (navigator as Navigator & { gpu?: unknown }).gpu
    ? 'webgpu'
    : 'webgl';

/**
 * The canvas paints the page's real ground, so it has to follow the theme.
 * The shard palette stays in the brand range in both themes; only the ground
 * and the surrounding scrims change.
 */
const PALETTE = {
  dark: {
    background: '#120F17',
    shard: '#896ABD',
    accent: '#A855F7',
    fallback:
      'radial-gradient(115% 85% at 18% 8%, #2A1B44 0%, transparent 58%),' +
      'radial-gradient(95% 75% at 88% 22%, #3A2065 0%, transparent 62%),' +
      'radial-gradient(120% 95% at 50% 108%, #1A1030 0%, transparent 70%),' +
      '#120F17',
    vignette:
      'linear-gradient(to bottom, rgba(9,7,13,.72) 0%, transparent 22%, transparent 72%, rgba(9,7,13,.82) 100%)',
  },
  light: {
    background: '#F7F5FA',
    shard: '#8E6FC6',
    accent: '#6D3FB5',
    fallback:
      'radial-gradient(115% 85% at 18% 8%, #EDE6FA 0%, transparent 60%),' +
      'radial-gradient(95% 75% at 88% 22%, #E4EAFD 0%, transparent 62%),' +
      'radial-gradient(120% 95% at 50% 108%, #F2ECFB 0%, transparent 70%),' +
      '#F7F5FA',
    vignette:
      'linear-gradient(to bottom, rgba(247,245,250,.82) 0%, transparent 24%, transparent 70%, rgba(247,245,250,.88) 100%)',
  },
};

/**
 * Per-route intensity. The hero gets the full effect; content-dense pages calm
 * it down through a CSS opacity veil so text stays comfortable to read.
 */
function intensityFor(pathname: string) {
  if (pathname === '/') return { veil: 0, speed: 1, density: 1.5 };
  if (pathname === '/projects') return { veil: 0.58, speed: 0.7, density: 1.05 };
  return { veil: 0.45, speed: 0.8, density: 1.2 };
}

export default function AeroShardsBackground() {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const lowPower = useLowPowerDevice();
  const [tier, setTier] = useState<Tier>(initialTier);

  const palette = PALETTE[theme];
  const { veil, speed, density } = intensityFor(pathname);

  // WebGPU failing to initialise steps down to WebGL; WebGL failing lands on CSS.
  const handleWebGpuError = useCallback(() => setTier('webgl'), []);
  const handleWebGlError = useCallback(() => setTier('css'), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
    >
      {/* Always painted: no blank frame while a renderer loads, and no blank
          page if every tier fails. */}
      <div className="absolute inset-0" style={{ background: palette.fallback }} />

      {tier !== 'css' && (
        <Suspense fallback={null}>
          {tier === 'webgpu' ? (
            <AeroShards
              // Remounts only on an explicit theme change, so the clear colour
              // and palette uniforms are rebuilt correctly.
              key={theme}
              backgroundColor={palette.background}
              shardColor={palette.shard}
              accentColor={palette.accent}
              placement="full"
              flow="stream"
              material="pearl"
              detail={lowPower ? 'bold' : 'balanced'}
              effect="none"
              scale={1}
              spread={1}
              depth={1}
              speed={speed}
              spin={1}
              interaction={reducedMotion ? 'none' : 'repel'}
              density={lowPower ? Math.min(density, 0.9) : density}
              shardSize={1.1}
              stretch={1}
              turbulence={1}
              glow={1}
              edgeSoftness={2}
              bloom={lowPower ? 0.25 : 0.5}
              grain={lowPower ? 0.02 : 0.05}
              chromaticAberration={lowPower ? 0.003 : 0.0075}
              transitionDuration={1}
              interactionRadius={1.5}
              interactionStrength={0.5}
              rippleIntensity={1}
              holdToGather
              paused={reducedMotion}
              onError={handleWebGpuError}
            />
          ) : (
            <AeroShardsWebGL
              key={theme}
              backgroundColor={palette.background}
              shardColor={palette.shard}
              accentColor={palette.accent}
              blendMode={theme === 'dark' ? 'additive' : 'normal'}
              placement="full"
              flow="stream"
              material="pearl"
              detail={lowPower ? 'low' : 'balanced'}
              effect="none"
              speed={speed}
              interaction={reducedMotion ? 'none' : 'repel'}
              density={lowPower ? Math.min(density, 0.9) * 0.8 : density}
              shardSize={1.1}
              bloom={lowPower ? 0.25 : 0.5}
              grain={lowPower ? 0.02 : 0.05}
              chromaticAberration={lowPower ? 0.003 : 0.0075}
              staticFrame={reducedMotion}
              maxPixelRatio={lowPower ? 1.5 : 2}
              opacity={theme === 'dark' ? 1 : 0.34}
              onFailure={handleWebGlError}
            />
          )}
        </Suspense>
      )}

      {/* Route veil: calms the field behind dense pages without the renderer
          having to know anything about routing. */}
      {veil > 0 && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ background: palette.background, opacity: veil }}
        />
      )}

      {/* Vignette: keeps the navbar and footer legible over bright shards
          without dimming the middle of the hero. */}
      <div className="absolute inset-0" style={{ background: palette.vignette }} />
    </div>
  );
}
