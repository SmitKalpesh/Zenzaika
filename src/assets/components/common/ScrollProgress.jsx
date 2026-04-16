import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { COLORS } from "../../../data/constants";
export const ScrollProgress = () => {
  const progress = useScrollProgress();
  
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${COLORS.primaryRed}, ${COLORS.gold})`,
        transformOrigin: "0%",
        zIndex: 1001,
      }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};