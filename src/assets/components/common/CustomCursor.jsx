import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);
  
  return (
    <motion.div
      style={{
        position: "fixed",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.primaryRed}06 0%, ${COLORS.gold}03 60%, transparent 100%)`,
        pointerEvents: "none",
        zIndex: 9999,
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      animate={{ opacity: isVisible ? 0.6 : 0 }}
      transition={{ duration: 0.2 }}
    />
  );
};