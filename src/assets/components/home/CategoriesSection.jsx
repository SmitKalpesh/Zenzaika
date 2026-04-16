import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";
import { ScrollRevealSection } from "../common/ScrollRevealSection";
import { staggerContainer, fadeUp } from "../../../styles/animations";

export const CategoriesSection = ({ setActivePage }) => {
  const categories = [
    { 
      name: "Everyday Essentials", 
      icon: "🌶️", 
      desc: "The staples every Indian kitchen runs on", 
      items: ["Turmeric", "Red Chilli", "Coriander", "Cumin"],
      color: COLORS.primaryRed 
    },
    { 
      name: "Blended Masalas", 
      icon: "🫙", 
      desc: "Perfectly balanced flavours, ready to cook", 
      items: ["Garam Masala", "Kitchen King", "Sabzi Masala"],
      color: COLORS.gold 
    },
    { 
      name: "Ready-to-Use Mixes", 
      icon: "⚡", 
      desc: "Convenience without compromising taste", 
      items: ["Instant Mixes", "Marinades", "Seasoning Blends"],
      color: COLORS.accentOrange 
    },
  ];

  return (
    <section style={{ background: COLORS.skinLight, padding: "100px 5vw", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollRevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              transition={{ duration: 0.6 }}
              style={{ height: 2, background: COLORS.primaryRed, margin: "0 auto 16px", borderRadius: 2 }}
            />
            <span className="section-badge">Shop by Category</span>
            <h2 className="playfair" style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, marginTop: 16, marginBottom: 16, color: COLORS.charcoal }}>
              Find Your Perfect Blend
            </h2>
            <p style={{ fontSize: 16, color: COLORS.muted, maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
              From everyday essentials to ready-to-use mixes — every product is crafted to bring authentic Indian flavours to your kitchen.
            </p>
          </div>
        </ScrollRevealSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: COLORS.white,
                borderRadius: 20, 
                padding: "36px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                cursor: "pointer",
                border: `1px solid ${cat.color}15`,
              }}
              onClick={() => setActivePage("Products")}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                style={{
                  width: 70, 
                  height: 70, 
                  borderRadius: 20,
                  background: `${cat.color}10`,
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontSize: 36, 
                  marginBottom: 20,
                }}
              >
                {cat.icon}
              </motion.div>
              <h3 className="playfair" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: COLORS.charcoal }}>
                {cat.name}
              </h3>
              <p style={{ fontSize: 14, color: COLORS.muted, marginBottom: 16, fontStyle: "italic" }}>
                {cat.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {cat.items.map((item, idx) => (
                  <span key={idx} style={{
                    fontSize: 12,
                    background: `${cat.color}08`,
                    padding: "4px 12px",
                    borderRadius: 50,
                    color: cat.color,
                    fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
              <motion.span
                whileHover={{ x: 5 }}
                style={{ fontSize: 13, fontWeight: 600, color: cat.color, display: "flex", alignItems: "center", gap: 6 }}
              >
                Shop Collection <span>→</span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};