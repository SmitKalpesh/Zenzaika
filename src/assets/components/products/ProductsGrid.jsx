import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COLORS } from "../../../data/constants";
import { staggerContainer, fadeUp } from "../../../styles/animations";

export const ProductsGrid = ({ setActivePage, products, limit = null }) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  
  useEffect(() => {
    // Update display products when products prop changes
    const prods = limit ? products.slice(0, limit) : products;
    setDisplayProducts(prods);
  }, [products, limit]);
  
  // If no products, show message
  if (!displayProducts || displayProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: "center", padding: "60px 20px" }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>🫙</div>
        <h3 className="playfair" style={{ fontSize: 24, color: COLORS.charcoal, marginBottom: 8 }}>
          No products found
        </h3>
        <p style={{ fontSize: 14, color: COLORS.muted }}>
          We're adding more products to this category soon!
        </p>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      key={products.length + displayProducts[0]?.name} // Force re-render when products change
      variants={staggerContainer}
      initial="hidden"
      animate="visible" // Changed from whileInView to animate for immediate display
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 28 }}
    >
      {displayProducts.map((product, index) => (
        <motion.div
          key={`${product.name}-${index}-${products.length}`}
          variants={fadeUp}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            background: COLORS.white,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.04)",
            cursor: "pointer",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{
              height: 170, 
              background: product.bg || COLORS.skinLight,
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: 56, 
              overflow: "hidden",
            }}
          >
            🫙
          </motion.div>
          <div style={{ padding: "20px 22px 22px" }}>
            <div style={{ fontSize: 11, color: COLORS.primaryRed, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
              {product.category}
            </div>
            <h3 className="playfair" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: COLORS.charcoal }}>
              {product.name}
            </h3>
            <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6, marginBottom: 16 }}>
              {product.desc}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: COLORS.primaryRed, fontWeight: 500, background: `${COLORS.primaryRed}08`, padding: "3px 10px", borderRadius: 50 }}>
                100% Natural
              </span>
              <motion.span whileHover={{ x: 5 }} style={{ fontSize: 13, color: COLORS.primaryRed, fontWeight: 500, cursor: "pointer" }}>
                Details →
              </motion.span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};