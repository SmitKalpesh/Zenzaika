import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { fadeUp } from "../../../styles/animations";

export const ScrollRevealSection = ({ children, delay = 0, className = "" }) => {
  const { ref, controls } = useScrollReveal();
  
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};