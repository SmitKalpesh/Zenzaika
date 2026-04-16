import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./assets/components/common/ScrollProgress";
import { CustomCursor } from "./assets/components/common/CustomCursor";
import { Navbar } from "./assets/components/common/Navbar";
import { Footer } from "./assets/components/common/Footer";
import { HomePage } from "./assets/Pages/HomePage";
import { ProductsPage } from "./assets/Pages/ProductsPage";
import { AboutPage } from "./assets/Pages/AboutPage";
import { ContactPage } from "./assets/Pages/ContactPage";
import "./styles/globals.css";
import { BackToTop } from "./assets/components/common/BackToTop";

function App() {
  const [activePage, setActivePage] = useState("Home");

  // Reset scroll position to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const pages = {
    Home: <HomePage setActivePage={setActivePage} />,
    Products: <ProductsPage setActivePage={setActivePage} />,
    About: <AboutPage />,
    Contact: <ContactPage />,
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
            {pages[activePage]}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActivePage={setActivePage} />
      <BackToTop/>
    </>
  );
}

export default App;