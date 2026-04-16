import { motion } from "framer-motion";
import { COLORS } from "../../data/constants";
import { ScrollRevealSection } from "../components/common/ScrollRevealSection";
import { staggerContainer, fadeUp } from "../../styles/animations";

export const AboutPage = () => {
  const values = [
    { icon: "🌱", title: "Farm to Shelf", desc: "We source directly from trusted farmers, ensuring freshness and fair trade at every step of the journey." },
    { icon: "⚗️", title: "Traditional Methods", desc: "Our masalas are stone-ground, our snacks slow-fried. No shortcuts, only the ancient ways that deliver real flavour." },
    { icon: "🏅", title: "Certified Quality", desc: "FSSAI certified with ISO-compliant facilities. Every batch is tested to meet the highest purity standards." },
    { icon: "🤝", title: "Community First", desc: "We employ local artisans, support women-led enterprises, and reinvest in the communities that make our work possible." },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.deepRed})`, padding: "80px 5vw 60px", textAlign: "center" }}>
        <span className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: COLORS.lightGold, borderColor: "rgba(212,175,55,0.3)" }}>
          Our Heritage
        </span>
        <h1 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#fff", fontWeight: 700, marginTop: 12, lineHeight: 1.2 }}>
          Not Every Spice Deserves Your Kitchen.
        </h1>
        <p style={{ fontSize: 24, color: COLORS.lightGold, marginTop: 16, fontStyle: "italic", fontWeight: 500 }}>
          Ours Does.
        </p>
      </div>

      {/* Main Story Section */}
      <section style={{ background: COLORS.white, padding: "100px 5vw" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <ScrollRevealSection>
            <div className="divider-ornament" style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
              <span className="playfair" style={{ fontSize: 12, color: COLORS.gold, letterSpacing: 3, textTransform: "uppercase" }}>Our Story</span>
            </div>
            
            <p style={{ fontSize: 18, color: COLORS.charcoal, lineHeight: 1.9, marginBottom: 25, fontWeight: 500 }}>
              In Indian kitchens, spices are not just ingredients —<br />
              they decide the mood of a meal, the memory of a dish, and sometimes, even the love in it.
            </p>
            
            <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.9, marginBottom: 25 }}>
              But somewhere between mass production and shortcuts,<br />
              that authenticity started fading.
            </p>
            
            <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.9, marginBottom: 25 }}>
              At Zenzaika Foods & Spices Pvt. Ltd., we chose a different path.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: 30, marginBottom: 30, flexWrap: "wrap" }}>
              <span style={{ fontSize: 20, fontWeight: 600, color: COLORS.primaryRed }}>Not faster.</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: COLORS.gold }}>Not cheaper.</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: COLORS.accentGreen }}>But better.</span>
            </div>
            
            <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.9, marginBottom: 25 }}>
              We go back to the roots — sourcing from farms where spices are grown with care, not chemicals.<br />
              We process them with precision, not haste.<br />
              And we pack them in a way that locks in what truly matters — flavour, aroma, and purity.
            </p>
            
            <div style={{ 
              background: `linear-gradient(135deg, ${COLORS.primaryRed}10, ${COLORS.gold}10)`,
              padding: "35px",
              borderRadius: 20,
              marginTop: 30,
              borderLeft: `4px solid ${COLORS.primaryRed}`
            }}>
              <p style={{ fontSize: 18, color: COLORS.primaryRed, lineHeight: 1.8, fontStyle: "italic", fontWeight: 500 }}>
                Because we believe…<br />
                when the foundation is pure, everything you cook becomes better.
              </p>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Big Fonts Headline */}
      <section style={{ background: COLORS.skinWarm, padding: "80px 5vw", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="playfair" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: COLORS.primaryRed, lineHeight: 1.3, maxWidth: 900, margin: "0 auto" }}>
            Good Food Needs No Secrets.<br />Just Honest Ingredients.
          </h2>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section style={{ background: COLORS.white, padding: "80px 5vw 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }} className="responsive-grid">
            {/* Mission */}
            <ScrollRevealSection>
              <div style={{ 
                background: COLORS.skinLight, 
                borderRadius: 24, 
                padding: "48px 40px",
                height: "100%",
                borderTop: `5px solid ${COLORS.primaryRed}`
              }}>
                <div style={{ 
                  fontSize: 12, 
                  letterSpacing: 3, 
                  fontWeight: 700, 
                  color: COLORS.primaryRed, 
                  textTransform: "uppercase", 
                  marginBottom: 20 
                }}>
                  OUR MISSION
                </div>
                <p style={{ fontSize: 16, color: COLORS.charcoal, lineHeight: 1.8, marginBottom: 20 }}>
                  To bring back trust to everyday cooking.
                </p>
                <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.8 }}>
                  We are committed to delivering spices that are pure, unadulterated, and rich in natural flavour — sourced responsibly, processed with care, and packed to preserve their true essence.
                </p>
                <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.8, marginTop: 20, fontStyle: "italic" }}>
                  Because no kitchen should have to compromise on what goes into its food.
                </p>
              </div>
            </ScrollRevealSection>

            {/* Vision */}
            <ScrollRevealSection delay={0.2}>
              <div style={{ 
                background: COLORS.skinLight, 
                borderRadius: 24, 
                padding: "48px 40px",
                height: "100%",
                borderTop: `5px solid ${COLORS.gold}`
              }}>
                <div style={{ 
                  fontSize: 12, 
                  letterSpacing: 3, 
                  fontWeight: 700, 
                  color: COLORS.gold, 
                  textTransform: "uppercase", 
                  marginBottom: 20 
                }}>
                  OUR VISION
                </div>
                <p style={{ fontSize: 16, color: COLORS.charcoal, lineHeight: 1.8, marginBottom: 20 }}>
                  To become a name every kitchen relies on — without a second thought.
                </p>
                <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.8 }}>
                  We envision Zenzaika as a symbol of purity and authenticity, where every product reflects consistency, quality, and the real taste of India.
                </p>
                <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.8, marginTop: 20 }}>
                  Not just in homes, but across businesses, retailers, and global markets.
                </p>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ background: COLORS.white, padding: "100px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollRevealSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="section-badge">What We Stand For</span>
              <h2 className="playfair" style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, marginTop: 16 }}>
                Our Core Values
              </h2>
            </div>
          </ScrollRevealSection>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 28 }}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                style={{
                  background: COLORS.skinLight, borderRadius: 20, padding: "32px 24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  textAlign: "center",
                }}
              >
                <motion.div whileHover={{ rotate: 5, scale: 1.05 }} style={{ fontSize: 40, marginBottom: 16 }}>
                  {value.icon}
                </motion.div>
                <h3 className="playfair" style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7 }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};