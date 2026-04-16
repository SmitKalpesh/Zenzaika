import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./assets/components/common/ScrollProgress";
import { CustomCursor } from "./assets/components/common/CustomCursor";
import { Navbar } from "./assets/components/common/Navbar";
import { Footer } from "./assets/components/common/Footer";
import { BackToTop } from "./assets/components/common/BackToTop";
import "./styles/globals.css";

// Lazy load all pages
const HomePage = lazy(() => import("./assets/Pages/HomePage"));
const ProductsPage = lazy(() => import("./assets/Pages/ProductsPage"));
const AboutPage = lazy(() => import("./assets/Pages/AboutPage"));
const ContactPage = lazy(() => import("./assets/Pages/ContactPage"));

// Simple loading component
const LoadingFallback = () => (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "50vh" 
  }}>
    <div style={{
      width: 40,
      height: 40,
      border: `3px solid #C0392B20`,
      borderTop: `3px solid #C0392B`,
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const pages = {
    Home: <HomePage setActivePage={setActivePage} />,
    Products: <ProductsPage setActivePage={setActivePage} />,
    About: <AboutPage setActivePage={setActivePage} />,
    Contact: <ContactPage setActivePage={setActivePage} />,
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ minHeight: "100vh" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<LoadingFallback />}>
              {pages[activePage]}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActivePage={setActivePage} />
      <BackToTop />
    </>
  );
}

export default App;