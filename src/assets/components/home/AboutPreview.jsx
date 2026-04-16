import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";
import { ScrollRevealSection } from "../common/ScrollRevealSection";
import { staggerContainer, fadeUp } from "../../../styles/animations";

export const AboutPreview = ({ setActivePage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = [
    { icon: "🌿", label: "Farm to Pack Freshness" },
    { icon: "✨", label: "Hygienic Processing" },
    { icon: "📦", label: "Secure Packaging" },
    { icon: "🇮🇳", label: "Authentic Indian Flavours" },
  ];

  // For mobile: render without any animations
  if (isMobile) {
    return (
      <section style={{ 
        background: COLORS.skinWarm, 
        padding: "100px 5vw", 
        overflow: "hidden",
        scrollMarginTop: "70px"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 50, alignItems: "center" }}>
          
          {/* Image Section */}
          <div style={{
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
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, borderRadius: "50%", background: "rgba(212,175,55,0.1)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 150, height: 150, borderRadius: "50%", background: "rgba(244,219,200,0.08)" }} />
            <span style={{ fontSize: 60, position: "relative", zIndex: 1 }}>🌿</span>
            <div className="playfair" style={{ fontSize: 24, fontWeight: 700, color: "#fff", textAlign: "center", position: "relative", zIndex: 1, padding: "0 20px" }}>
              Where Every Spice <br/>Tells a Story
            </div>
          </div>

          {/* Text Section - No animations */}
          <div>
            <span className="section-badge">Our Story</span>
            <h2 className="playfair" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, marginTop: 16, marginBottom: 20, color: COLORS.charcoal, lineHeight: 1.3 }}>
              From Humble Roots to<br /><em style={{ color: COLORS.primaryRed }}>India's Finest</em>
            </h2>
            <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 20 }}>
              Founded in the heart of Gujarat, Zenzaika Foods began as a small family venture with a single, unwavering belief — that the finest food comes from the finest ingredients.
            </p>
            <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 32 }}>
              Today, we serve over a million families across India, but our promise remains the same: authentic flavours, honest ingredients, and a legacy of love in every product.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
              {[["✓ No Artificial Colours", "✓ Stone-Ground Spices"], ["✓ FSSAI Certified", "✓ Zero Preservatives"]].map((row, i) => (
                <div key={i}>
                  {row.map(item => (
                    <div key={item} style={{ fontSize: 13, color: COLORS.primaryRed, fontWeight: 500, padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <button className="btn-primary" onClick={() => setActivePage("About")}>
              Read Our Full Story
            </button>
          </div>
        </div>
      </section>
    );
  }

  // For desktop: keep original animations
  return (
    <section style={{ background: COLORS.skinWarm, padding: "100px 5vw", overflow: "hidden", scrollMarginTop: "80px" }}>
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
            <motion.span animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: "relative", fontSize: 80 }}>🌿</motion.span>
            <div className="playfair" style={{ fontSize: 24, fontWeight: 700, color: "#fff", textAlign: "center", position: "relative", zIndex: 1, padding: "0 20px" }}>
              Where Every Spice <br/>Tells a Story
            </div>
          </motion.div>
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.2}>
          <span className="section-badge">Our Story</span>
          <h2 className="playfair" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, marginTop: 16, marginBottom: 20, color: COLORS.charcoal, lineHeight: 1.3 }}>
            From Humble Roots to<br /><em style={{ color: COLORS.primaryRed }}>India's Finest</em>
          </h2>
          <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 20 }}>
            Founded in the heart of Gujarat, Zenzaika Foods began as a small family venture with a single, unwavering belief — that the finest food comes from the finest ingredients.
          </p>
          <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.9, marginBottom: 32 }}>
            Today, we serve over a million families across India, but our promise remains the same: authentic flavours, honest ingredients, and a legacy of love in every product.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}
          >
            {[["✓ No Artificial Colours", "✓ Stone-Ground Spices"], ["✓ FSSAI Certified", "✓ Zero Preservatives"]].map((row, i) => (
              <div key={i}>
                {row.map(item => (
                  <motion.div key={item} variants={fadeUp} style={{ fontSize: 13, color: COLORS.primaryRed, fontWeight: 500, padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary" onClick={() => setActivePage("About")}>
            Read Our Full Story
          </motion.button>
        </ScrollRevealSection>
      </div>
    </section>
  );
};