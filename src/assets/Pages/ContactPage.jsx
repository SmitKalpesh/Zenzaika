import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../../data/constants";
import { ScrollRevealSection } from "../components/common/ScrollRevealSection";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export const ContactPage = ({setActivePage}) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    border: `1.5px solid rgba(0,0,0,0.08)`,
    borderRadius: 12, fontSize: 14, fontFamily: "'Poppins', sans-serif",
    background: COLORS.white, color: COLORS.charcoal, marginBottom: 16,
    display: "block",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <Breadcrumbs activePage="Contact" setActivePage={setActivePage} />
      {/* Hero Section with new headline */}
      <div style={{ background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.deepRed})`, padding: "80px 5vw 60px", textAlign: "center" }}>
        <span className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: COLORS.lightGold, borderColor: "rgba(212,175,55,0.3)" }}>
          Get In Touch
        </span>
        <h1 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#fff", fontWeight: 700, marginTop: 12, lineHeight: 1.2 }}>
          Let's Connect Over Something Real
        </h1>
        <div style={{ 
          width: 60, 
          height: 2, 
          background: COLORS.gold, 
          margin: "24px auto 20px",
          borderRadius: 2
        }} />
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginTop: 12, maxWidth: 500, margin: "0 auto" }}>
          Whether it's a question, a bulk order, or just curiosity —<br />
          we're always ready to hear from you.
        </p>
      </div>

      {/* Contact Content Section */}
      <section style={{ background: COLORS.skinLight, padding: "80px 5vw 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60 }} className="responsive-grid">
          
          {/* Left Side - Contact Info */}
          <ScrollRevealSection>
            <h2 className="playfair" style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: COLORS.charcoal }}>
              Let's Connect
            </h2>
            <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.8, marginBottom: 36 }}>
              Whether it's a question, a bulk order, or just curiosity — we're always ready to hear from you.
            </p>

            {[
              { icon: "📍", label: "Address", value: "Oriana Business Park (IT Park) Co-Op. Premises Soc. Ltd.Regd. Office· - Plot No. A-69/70, Road no. 22, Wagle IndustrialEstate, M.l.D.C., Thane - 400604" },
              { icon: "📞", label: "Phone", value: "022 44516027/ +91 99200 09907 / +91 99200 09901" },
              { icon: "✉️", label: "Email", value: "hello@zenzaikafoods.in" },
              { icon: "🕐", label: "Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}
              >
                <motion.div whileHover={{ scale: 1.05 }} style={{ width: 44, height: 44, borderRadius: 12, background: `${COLORS.primaryRed}08`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {item.icon}
                </motion.div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: COLORS.primaryRed, textTransform: "uppercase", marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, color: COLORS.charcoal, lineHeight: 1.6 }}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: 24, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", background: COLORS.skinWarm, height: 160, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}
            >
              <div style={{ fontSize: 28 }}>🗺️</div>
              <div style={{ fontSize: 12, color: COLORS.muted, fontWeight: 500 }}>Rajkot, Gujarat, India</div>
            </motion.div>
          </ScrollRevealSection>

          {/* Right Side - Contact Form */}
          <ScrollRevealSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ background: COLORS.white, borderRadius: 24, padding: "44px 40px", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
            >
              <h3 className="playfair" style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: COLORS.charcoal }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: 13, color: COLORS.muted, marginBottom: 28 }}>
                We'll get back to you within 24 hours
              </p>
              
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{ background: `${COLORS.accentGreen}10`, border: `1px solid ${COLORS.accentGreen}30`, borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontSize: 14, color: COLORS.accentGreen, fontWeight: 500 }}
                  >
                    ✓ Message sent! We'll get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <input 
                  placeholder="Your Name *" 
                  style={inputStyle} 
                  value={form.name} 
                  onChange={e => setForm({ ...form, name: e.target.value })} 
                />
                <input 
                  placeholder="Email Address *" 
                  style={inputStyle} 
                  value={form.email} 
                  onChange={e => setForm({ ...form, email: e.target.value })} 
                />
              </div>
              <input 
                placeholder="Phone Number" 
                style={inputStyle} 
                value={form.phone} 
                onChange={e => setForm({ ...form, phone: e.target.value })} 
              />
              <textarea 
                placeholder="Your message... *" 
                rows={5} 
                style={{ ...inputStyle, resize: "vertical" }} 
                value={form.message} 
                onChange={e => setForm({ ...form, message: e.target.value })} 
              />
              <motion.button 
                whileHover={{ scale: 1.01 }} 
                whileTap={{ scale: 0.98 }} 
                className="btn-primary" 
                style={{ width: "100%", justifyContent: "center", marginTop: 4 }} 
                onClick={handleSubmit}
              >
                Send Message ✦
              </motion.button>
            </motion.div>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  );
};