import { motion } from "framer-motion";
import { COLORS, NAV_ITEMS } from "../../../data/constants";

export const Footer = ({ setActivePage }) => {
  return (
    <footer style={{ background: COLORS.charcoal, color: "#fff", padding: "60px 5vw 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 50 }} className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌿</div>
              <div>
                <div className="playfair" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.1 }}>Zenzaika</div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Foods & Spices</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 260 }}>
              Bringing authentic Indian flavours to every kitchen since 2010.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["📘", "📷", "🐦"].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.05 }}
                  style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer" }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            { title: "Quick Links", items: ["Home", "Products", "About", "Contact"] },
            { title: "Products", items: ["Masalas", "Namkeens", "Packed Snacks", "Gift Packs"] },
            { title: "Company", items: ["Our Story", "Quality Promise", "Distributors", "Careers"] },
          ].map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.gold, marginBottom: 18 }}>{col.title}</div>
              {col.items.map(item => (
                <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 10, cursor: "pointer" }}
                  onClick={() => NAV_ITEMS.includes(item) ? setActivePage(item) : null}>
                  {item}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}
        >
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
            © 2025 Zenzaika Foods & Spices Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
            FSSAI Lic. No. 10015022000012 · Made with ❤️ in Gujarat
          </div>
        </motion.div>
      </div>
    </footer>
  );
};