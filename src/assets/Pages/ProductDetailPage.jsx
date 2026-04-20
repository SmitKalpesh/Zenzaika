import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../data/constants";
import { PRODUCTS } from "../../data/products";

export const ProductDetailPage = ({ setActivePage, product }) => {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div style={{ paddingTop: 72, textAlign: "center", padding: "100px 20px" }}>
        <h2 className="playfair" style={{ fontSize: 32, color: COLORS.charcoal }}>Product Not Found</h2>
        <button className="btn-primary" onClick={() => setActivePage("Products")} style={{ marginTop: 20 }}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Breadcrumbs */}
      <div style={{ background: COLORS.skinLight, padding: "15px 5vw", borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, fontSize: 13, color: COLORS.muted }}>
          <span style={{ cursor: "pointer", color: COLORS.primaryRed }} onClick={() => setActivePage("Home")}>Home</span>
          <span>/</span>
          <span style={{ cursor: "pointer" }} onClick={() => setActivePage("Products")}>Shop</span>
          <span>/</span>
          <span style={{ cursor: "pointer" }} onClick={() => setActivePage("Products")}>Products</span>
          <span>/</span>
          <span style={{ color: COLORS.charcoal, fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section style={{ background: COLORS.skinLight, padding: "60px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="responsive-grid">
            
            {/* Left Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: product.bg || COLORS.white,
                borderRadius: 20,
                padding: "40px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                border: `1px solid ${COLORS.primaryRed}10`,
              }}
            >
              <div style={{ fontSize: 200, marginBottom: 20 }}>
                {product.emoji || "🫙"}
              </div>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20 }}>
                <span style={{
                  background: COLORS.primaryRed,
                  color: "#fff",
                  padding: "6px 16px",
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  {product.category}
                </span>
                <span style={{
                  background: `${COLORS.gold}20`,
                  color: COLORS.gold,
                  padding: "6px 16px",
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  100% Natural
                </span>
              </div>
            </motion.div>

            {/* Right Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="playfair" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: COLORS.charcoal, marginBottom: 16 }}>
                {product.name}
              </h1>
              
              {/* Description */}
              <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.7, marginBottom: 24 }}>
                {product.desc || "Indulge in the vibrant and robust flavors of our Authentic spice blend, meticulously crafted to capture the essence of traditional Indian cuisine. This aromatic masala brings together a symphony of spices, creating an irresistible blend that elevates your home-cooked dishes to culinary perfection."}
              </p>

              {/* Back to Products Button */}
              <button
                onClick={() => setActivePage("Products")}
                style={{
                  padding: "12px 24px",
                  borderRadius: 50,
                  border: `1.5px solid ${COLORS.primaryRed}`,
                  background: "transparent",
                  color: COLORS.primaryRed,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  marginTop: 10
                }}
              >
                ← Back to Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section style={{ background: COLORS.white, padding: "60px 5vw 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Tab Headers */}
          <div style={{ display: "flex", gap: 30, borderBottom: `1px solid ${COLORS.primaryRed}20`, marginBottom: 30 }}>
            {["description", "additional", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                  fontSize: 16,
                  fontWeight: activeTab === tab ? 700 : 500,
                  color: activeTab === tab ? COLORS.primaryRed : COLORS.muted,
                  cursor: "pointer",
                  borderBottom: activeTab === tab ? `2px solid ${COLORS.primaryRed}` : "none",
                  transition: "all 0.3s ease"
                }}
              >
                {tab === "description" && "Description"}
                {tab === "additional" && "Additional information"}
                {tab === "reviews" && "Reviews (0)"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "description" && (
              <div>
                <h3 className="playfair" style={{ fontSize: 20, fontWeight: 700, color: COLORS.charcoal, marginBottom: 20 }}>
                  PRODUCT INFORMATION
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }} className="responsive-grid">
                  <div>
                    <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                      <strong style={{ color: COLORS.charcoal }}>Available Product Sizes:</strong> 50-gram, 100-gram
                    </p>
                    <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                      <strong style={{ color: COLORS.charcoal }}>Rich Color and Aroma:</strong> Our {product.name} is a delightful medley of spices, including coriander, cumin, fennel, cloves, and more. This aromatic blend ensures a burst of flavor.
                    </p>
                    <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                      <strong style={{ color: COLORS.charcoal }}>Packaging:</strong> Available in convenient and airtight packaging to preserve freshness and flavor. Choose from various sizes to suit your culinary needs.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                      <strong style={{ color: COLORS.charcoal }}>Hygiene:</strong> No Artificial colors are added.
                    </p>
                    <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                      <strong style={{ color: COLORS.charcoal }}>Elevate Your Cooking Experience:</strong> Beyond traditional dishes, our masala is a versatile companion in the kitchen. Use it to enhance other vegetable dishes, lentils, or even as a seasoning.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "additional" && (
              <div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                      <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal, width: "40%" }}>Product Sizes</td>
                      <td style={{ padding: "12px 0", color: COLORS.muted }}>50 gram, 100 gram</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                      <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Category</td>
                      <td style={{ padding: "12px 0", color: COLORS.muted }}>{product.category}</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                      <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Storage</td>
                      <td style={{ padding: "12px 0", color: COLORS.muted }}>Store in a cool, dry place away from direct sunlight</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                      <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Shelf Life</td>
                      <td style={{ padding: "12px 0", color: COLORS.muted }}>12 months from manufacturing date</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                      <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Certification</td>
                      <td style={{ padding: "12px 0", color: COLORS.muted }}>FSSAI Certified, 100% Natural</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>⭐</div>
                <h3 className="playfair" style={{ fontSize: 20, fontWeight: 600, color: COLORS.charcoal, marginBottom: 8 }}>
                  No reviews yet
                </h3>
                <p style={{ fontSize: 14, color: COLORS.muted, marginBottom: 20 }}>
                  Be the first to review this product
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};