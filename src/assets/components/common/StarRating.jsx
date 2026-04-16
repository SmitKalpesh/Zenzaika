import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";

export const StarRating = ({ count }) => {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          style={{ color: COLORS.gold, fontSize: 14 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
};