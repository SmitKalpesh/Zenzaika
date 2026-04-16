import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";
import { ScrollRevealSection } from "../common/ScrollRevealSection";
import { staggerContainer, fadeUp } from "../../../styles/animations";

export const AboutPreview = ({ setActivePage }) => {
  const features = [
    { icon: "🌿", label: "Farm to Pack Freshness" },
    { icon: "✨", label: "Hygienic Processing" },
    { icon: "📦", label: "Secure Packaging" },
    { icon: "🇮🇳", label: "Authentic Indian Flavours" },
  ];

  return (
    <section style={{ background: COLORS.skinWarm, padding: "100px 5vw", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="responsive-grid">
        <ScrollRevealSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              width: "100%", 
              aspectRatio: "4/5", 
              borderRadius: 24,
              background: `linear-gradient(145deg, ${COLORS.primaryRed}, ${COLORS.deepRed})`,
              display: "flex", 
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center",
              gap: 20,
              boxShadow: "0 32px 60px rgba(192,57,43,0.15)",
              position: "relative", 
              overflow: "hidden",
            }}
          >
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, borderRadius: "50%", background: "rgba(212,175,55,0.1)" }} />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} style={{ position: "absolute", bottom: 0, left: 0, width: 150, height: 150, borderRadius: "50%", background: "rgba(244,219,200,0.08)" }} />
            
            <motion.span animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ fontSize: 60, position: "relative", zIndex: 1 }}>🌿</motion.span>
            <div className="playfair" style={{ fontSize: 24, fontWeight: 700, color: "#fff", textAlign: "center", position: "relative", zIndex: 1, padding: "0 20px" }}>
              Where Every Spice <br/>Tells a Story
            </div>
          </motion.div>
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.2}>
          <span className="section-badge">Our Story</span>
          <h2 className="playfair" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, marginTop: 16, marginBottom: 20, color: COLORS.charcoal, lineHeight: 1.3 }}>
            Where Every Spice <br /><em style={{ color: COLORS.primaryRed }}>Tells a Story</em>
          </h2>
          <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 20 }}>
            At Zenzaika Foods & Spices Pvt. Ltd., our journey began with a simple thought — why should something as essential as spices ever be compromised?
          </p>
          <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 20 }}>
            India has always been known for its rich culinary heritage, where every dish carries emotion, culture, and generations of recipes. But somewhere along the way, quality started taking a back seat. We set out to change that.
          </p>
          <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 24 }}>
            By sourcing directly from trusted farms across India, we ensure that every spice retains its natural aroma, colour, and strength. Each batch goes through careful cleaning, processing, and packaging — not just to meet standards, but to exceed expectations.
          </p>
          <p style={{ fontSize: 15, color: COLORS.primaryRed, lineHeight: 1.7, marginBottom: 32, fontWeight: 500, fontStyle: "italic" }}>
            Because for us, it's not about selling spices. It's about delivering the same authenticity your grandmother trusted, in a way that fits today's lifestyle.
          </p>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 36 }}
          >
            {features.map((feature, idx) => (
              <motion.div key={feature.label} variants={fadeUp} style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 10,
                background: COLORS.white,
                padding: "10px 16px",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                <span style={{ fontSize: 20 }}>{feature.icon}</span>
                <span style={{ fontSize: 12, color: COLORS.charcoal, fontWeight: 500 }}>{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary" onClick={() => setActivePage("About")}>
            Read Our Full Story →
          </motion.button>
        </ScrollRevealSection>
      </div>
    </section>
  );
};