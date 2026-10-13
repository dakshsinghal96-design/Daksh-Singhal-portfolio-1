/**
 * The site's single background instance.
 *
 * Mounted once in the root layout, above <Routes>, so route changes only nudge
 * a couple of uniforms — the canvas is never torn down and rebuilt, and there
 * is never more than one WebGL context alive.
 *
 * Three degradations, in order of severity:
 *   1. low-power device  → fewer, cheaper shards and a capped pixel ratio
 *   2. reduced motion    → one static frame, no loop, no pointer interaction
 *   3. no WebGL / lost   → a pure CSS gradient that matches the palette
 */
import { Suspense, lazy, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLowPowerDevice, usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { useTheme } from '../hooks/themeContext';

// three.js is the heaviest dependency on the site and nothing above the fold
// needs it, so it is split out and fetched after the hero has rendered.
const AeroShards = lazy(() => import('./AeroShards'));

/**
 * The canvas paints the page's actual ground, so it has to follow the theme.
 * Additive blending reads as glow on the dark ground but blows out to white on
 * the light one, hence the different blend mode and much lower opacity there.
 */
const PALETTE = {
  dark: {
    background: '#120F17',
    shard: '#896ABD',
    accent: '#A855F7',
    blend: 'additive' as const,
    opacityScale: 1,
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
    blend: 'normal' as const,
    opacityScale: 0.34,
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
 * it down so text stays comfortable to read over it.
 */
function intensityFor(pathname: string) {
  if (pathname === '/') return { opacity: 1, speed: 1, density: 1.5 };
  if (pathname === '/projects') return { opacity: 0.42, speed: 0.7, density: 1.05 };
  return { opacity: 0.55, speed: 0.8, density: 1.2 };
}

export default function AeroShardsBackground() {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const lowPower = useLowPowerDevice();
  const [failed, setFailed] = useState(false);

  const palette = PALETTE[theme];
  const { opacity, speed, density } = intensityFor(pathname);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
    >
      {/* Always painted, so there is never a blank frame while three.js loads
          and never a blank page if it fails outright. */}
      <div className="absolute inset-0" style={{ background: palette.fallback }} />

      {!failed && (
        <Suspense fallback={null}>
          <AeroShards
            // Remounts on theme change so the clear colour and blend mode are
            // rebuilt correctly; that only happens on an explicit toggle.
            key={theme}
            backgroundColor={palette.background}
            shardColor={palette.shard}
            accentColor={palette.accent}
            blendMode={palette.blend}
            placement="full"
            flow="stream"
            material="pearl"
            detail={lowPower ? 'low' : 'balanced'}
            effect="none"
            scale={1}
            spread={1}
            depth={1}
            speed={speed}
            spin={1}
            interaction={reducedMotion ? 'none' : 'repel'}
            density={lowPower ? Math.min(density, 0.9) * 0.8 : density}
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
            staticFrame={reducedMotion}
            maxPixelRatio={lowPower ? 1.5 : 2}
            opacity={opacity * palette.opacityScale}
            onFailure={() => setFailed(true)}
          />
        </Suspense>
      )}

      {/* Vignette: keeps the top navbar and the footer legible over bright
          shards without dimming the middle of the hero. */}
      <div className="absolute inset-0" style={{ background: palette.vignette }} />
    </div>
  );
}
