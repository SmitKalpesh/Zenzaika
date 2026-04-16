import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../../../data/constants";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      // Show button when scrolled 30% down
      if (scrollPercent > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${COLORS.gold}`,
            color: COLORS.gold,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            zIndex: 999,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
          whileHover={{ 
            scale: 1.1,
            background: COLORS.deepRed,
            color: "#fff"
          }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};