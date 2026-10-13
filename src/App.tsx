import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AeroShardsBackground from './components/AeroShardsBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import { ToastProvider } from './components/Toast';
import { usePrefersReducedMotion } from './hooks/useMediaQuery';

// Home ships in the main bundle so the hero paints immediately; the rest are
// split per route.
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Reset scroll on navigation, but never on a same-page query change — the
 * Projects page keeps its filters in the URL, and re-sorting should not yank
 * the reader back to the top.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [pathname, reduced]);

  return null;
}

/** Announces route changes for screen readers, which do not notice a re-render. */
function RouteAnnouncer() {
  const { pathname } = useLocation();
  return (
    <div aria-live="polite" role="status" className="sr-only">
      {pathname === '/' ? 'Home' : pathname.replace('/', '')} page loaded
    </div>
  );
}

function PageFallback() {
  return (
    <div className="shell flex min-h-[60vh] items-center justify-center py-24">
      <p className="text-sm text-muted" role="status">
        Loading…
      </p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        {/* One background instance for the whole application, mounted above
            <Routes> so navigating never remounts the WebGL canvas. */}
        <AeroShardsBackground />

        <ScrollToTop />
        <RouteAnnouncer />

        <a
          href="#main"
          className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-violet focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
