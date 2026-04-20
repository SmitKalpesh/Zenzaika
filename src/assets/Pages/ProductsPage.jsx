import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../data/constants";
import { PRODUCTS } from "../../data/products";
import { CATEGORIES } from "../../data/categories";
import { ProductsGrid } from "../components/products/ProductsGrid";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ProductDetailPage } from "./ProductDetailPage";

export const ProductsPage = ({ setActivePage }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const cats = ["All", ...CATEGORIES.map(cat => cat.name)];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  // If a product is selected, show the detail page
  if (selectedProduct) {
    return (
      <ProductDetailPage 
        setActivePage={setActivePage} 
        product={selectedProduct}
        onBackToProducts={handleBackToProducts}
      />
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <Breadcrumbs activePage="Products" setActivePage={setActivePage} />
      
      <div style={{ background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.deepRed})`, padding: "60px 5vw 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: COLORS.lightGold, borderColor: "rgba(212,175,55,0.3)" }}>
            Our Range
          </span>
          <h1 className="playfair" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", fontWeight: 700, marginTop: 12 }}>
            Premium Products
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginTop: 12 }}>
            Sourced honestly. Crafted with love.
          </p>
        </div>
      </div>

      <section style={{ background: COLORS.skinLight, padding: "60px 5vw 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, justifyContent: "center" }}
          >
            {cats.map(c => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFilter(c)}
                style={{
                  padding: "10px 24px", 
                  borderRadius: 50,
                  border: filter === c ? "none" : `1.5px solid rgba(0,0,0,0.1)`,
                  background: filter === c ? COLORS.primaryRed : COLORS.white,
                  color: filter === c ? "#fff" : COLORS.charcoal,
                  fontSize: 14, 
                  fontWeight: 600, 
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all 0.25s ease",
                  boxShadow: filter === c ? `0 4px 12px ${COLORS.primaryRed}30` : "none",
                }}
              >
                {c}
              </motion.button>
            ))}
          </motion.div>
          <ProductsGrid 
            setActivePage={setActivePage} 
            products={filtered} 
            limit={null}
            onProductClick={handleProductClick}
          />
        </div>
      </section>
    </div>
  );
};