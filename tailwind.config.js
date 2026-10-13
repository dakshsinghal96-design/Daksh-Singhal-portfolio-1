/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces are driven by CSS variables so the light theme can swap them
        // without every component needing a `dark:` variant.
        base: 'rgb(var(--c-base) / <alpha-value>)',
        deep: 'rgb(var(--c-deep) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        shard: '#896ABD',
        violet: '#A855F7',
        azure: '#4079FF',
        mint: '#40FFAA',
        cyan: '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { shell: '1200px' },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: {
        glow: '0 0 0 1px rgb(137 106 189 / 0.22), 0 18px 60px -20px rgb(137 106 189 / 0.55)',
        lift: '0 24px 70px -30px rgb(0 0 0 / 0.85)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translateY(10px) scale(.97)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan var(--gt-duration, 8s) linear infinite',
        'fade-up': 'fade-up .6s cubic-bezier(.2,.7,.3,1) both',
        'toast-in': 'toast-in .22s cubic-bezier(.2,.7,.3,1) both',
      },
    },
  },
  plugins: [],
};
