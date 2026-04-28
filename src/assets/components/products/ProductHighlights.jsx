import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";
import { PRODUCTS } from "../../../data/products";
import { ScrollRevealSection } from "../common/ScrollRevealSection";
import { ProductsGrid } from "../products/ProductsGrid";

export const ProductHighlights = ({ setActivePage, onProductClick }) => {
  return (
    <section style={{ background: COLORS.skinLight, padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollRevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-badge">Our Products</span>
            <h2 className="playfair" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, marginTop: 16, marginBottom: 16 }}>
              A Taste For Every Occasion
            </h2>
          </div>
        </ScrollRevealSection>
        
        <ProductsGrid 
          setActivePage={setActivePage} 
          products={PRODUCTS} 
          limit={8} 
          onProductClick={onProductClick}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-secondary" onClick={() => setActivePage("Products")}>
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};