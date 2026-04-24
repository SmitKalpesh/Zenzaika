import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COLORS } from "../../../data/constants";
import { staggerContainer, fadeUp } from "../../../styles/animations";

export const ProductsGrid = ({ setActivePage, products, limit = null, onProductClick }) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  
  useEffect(() => {
    const prods = limit ? products.slice(0, limit) : products;
    setDisplayProducts(prods);
  }, [products, limit]);
  
  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };
  
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
      key={products.length + displayProducts[0]?.name}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: 40 
      }}
    >
      {displayProducts.map((product, index) => (
        <motion.div
          key={`${product.name}-${index}-${products.length}`}
          variants={fadeUp}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            background: COLORS.white,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.04)",
            cursor: "pointer",
          }}
          onClick={() => handleProductClick(product)}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{
              height: 350, // Increased from 170 to 280
              background: product.bg || COLORS.skinLight,
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              overflow: "hidden",
            
            }}
          >
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: "600px",
                  height: "600px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <span style={{ fontSize: 80 }}>{product.emoji || "🫙"}</span> // Increased from 56 to 80
            )}
          </motion.div>
          <div style={{ padding: "24px 24px 28px" }}> {/* Increased padding */}
            <div style={{ fontSize: 12, color: COLORS.primaryRed, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>
              {product.category}
            </div>
            <h3 className="playfair" style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: COLORS.charcoal }}>
              {product.name}
            </h3>
            <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.6, marginBottom: 18 }}>
              {product.desc}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: COLORS.primaryRed, fontWeight: 600, background: `${COLORS.primaryRed}08`, padding: "4px 12px", borderRadius: 50 }}>
                100% Natural
              </span>
              <motion.span 
                whileHover={{ x: 5 }} 
                style={{ fontSize: 14, color: COLORS.primaryRed, fontWeight: 600, cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(product);
                }}
              >
                Details →
              </motion.span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};