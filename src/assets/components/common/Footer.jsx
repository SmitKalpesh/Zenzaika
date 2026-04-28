import { motion } from "framer-motion";
import { COLORS, NAV_ITEMS } from "../../../data/constants";

export const Footer = ({ setActivePage, setSelectedCategory }) => {
  const handleProductCategoryClick = (category) => {
    if (setSelectedCategory) {
      setSelectedCategory(category);
    }
    setActivePage("Products");
  };

  return (
    <footer style={{ background: COLORS.charcoal, color: "#fff", padding: "60px 5vw 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 50,
          }}
          className="footer-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* ✅ UPDATED LOGO SECTION */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
  
  
 <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  
  {/* Logo */}
  <img
    src="/src/assets/ZenzaikalogoFooter.png"
    alt="Zenzaika"
    style={{
      height: 50,
      objectFit: "contain",
      display: "block",
    }}
  />

  {/* Tagline */}
  <div
    style={{
      fontSize: 10,
      letterSpacing: 2.5,
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase",
      marginTop: 6,
      fontWeight: 500,
    }}
  >
    Foods & Spices
  </div>

</div>

</div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 260 }}>
              Bringing authentic Indian flavours to every kitchen since 2010.
            </p>

            
          </motion.div>

          {[
            {
              title: "Quick Links",
              items: [
                { name: "Home", action: () => setActivePage("Home") },
                { name: "Products", action: () => setActivePage("Products") },
                { name: "About", action: () => setActivePage("About") },
                { name: "Contact", action: () => setActivePage("Contact") },
              ],
            },
            {
              title: "Products",
              items: [
                { name: "Everyday Essentials", action: () => handleProductCategoryClick("Everyday Essentials") },
                { name: "Blended Masalas", action: () => handleProductCategoryClick("Blended Masalas") },
                { name: "Ready-to-Use Mixes", action: () => handleProductCategoryClick("Ready-to-Use Mixes") },
                { name: "Chutneys", action: () => handleProductCategoryClick("Chutneys") },
              ],
            },
            {
              title: "Company",
              items: [{ name: "Our Story", action: () => setActivePage("About") }],
            },
          ].map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>

              {col.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 10,
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onClick={item.action}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {item.name}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
            © 2025 Zenzaika Foods & Spices Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
            FSSAI Lic. No. 10015022000012 · Developed by Bizzyatra
          </div>
        </motion.div>
      </div>
    </footer>
  );
};