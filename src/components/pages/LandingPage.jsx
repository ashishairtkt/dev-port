import { memo, Suspense, lazy } from "react";
import Header from "./Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "../utils/ErrorBoundary";

// Lazy load components for better performance
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

// Error Boundary Component


// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="loading-container" role="status" aria-label="Loading content">
    <div className="loading-spinner"></div>
  </div>
);

// Skip Link for Accessibility
const SkipLink = () => (
  <a href="#main-content" className="skip-link">
    Skip to main content
  </a>
);

const LandingPage = memo(function LandingPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ashish Singh Rathod - Frontend Developer</title>
        <meta name="description" content="Frontend developer specializing in React, creating beautiful and user-friendly web experiences." />
        <meta property="og:title" content="Ashish Singh Rathod - Frontend Developer" />
        <meta property="og:description" content="Frontend developer specializing in React, creating beautiful and user-friendly web experiences." />
        <meta property="og:type" content="website" />
        <link rel="preload" href="/assets/images/embg.png" as="image" />
      </Helmet>

      <SkipLink />
      <div className="landing-page">
        <Header />
        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </HelmetProvider>
  );
});

export default LandingPage;
