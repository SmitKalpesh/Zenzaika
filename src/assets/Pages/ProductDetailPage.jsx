import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../data/constants";

export const ProductDetailPage = ({ setActivePage, product, onBackToProducts }) => {
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

  const handleBackToProducts = () => {
    if (onBackToProducts) {
      onBackToProducts();
    } else {
      setActivePage("Products");
    }
  };

  const productInfo = product.productInfo || {
    availableSizes: ["50 gram", "100 gram", "250 gram"],
    richColorAroma: "Our product is a delightful medley of premium spices.",
    packaging: "Available in convenient and airtight packaging to preserve freshness.",
    hygiene: "No Artificial colors are added.",
    elevateCooking: "Perfect for enhancing your daily cooking."
  };

  const additionalInfo = product.additionalInfo || {
    productSizes: "50 gram, 100 gram, 250 gram",
    category: product.category,
    storage: "Store in a cool, dry place away from direct sunlight",
    shelfLife: "12 months from manufacturing date",
    certification: "FSSAI Certified, 100% Natural"
  };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Breadcrumbs */}
      <div style={{ background: COLORS.skinLight, padding: "15px 5vw", borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, fontSize: 13, color: COLORS.muted }}>
          <span style={{ cursor: "pointer", color: COLORS.primaryRed }} onClick={() => setActivePage("Home")}>Home</span>
          <span>/</span>
          <span style={{ cursor: "pointer" }} onClick={handleBackToProducts}>Shop</span>
          <span>/</span>
          <span style={{ cursor: "pointer" }} onClick={handleBackToProducts}>Products</span>
          <span>/</span>
          <span style={{ color: COLORS.charcoal, fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      {/* Product Section */} <section style={{ padding: "60px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="responsive-grid">
            
            {/* Left Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                
                borderRadius: 20,
        
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                border: `1px solid ${COLORS.primaryRed}10`,
              }}
            >
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "800px",
                    maxHeight: "800px",
                    objectFit: "cover",
                    margin: "0 auto",
                    borderRadius:24,
                    
                  }}
                />
              ) : (
                <div style={{ fontSize: 200, marginBottom: 20 }}>
                  {product.emoji || "🫙"}
                </div>
              )}
              
              {/* Tags */}
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
              
              <p style={{ fontSize: 15, color: COLORS.muted, lineHeight: 1.7, marginBottom: 30 }}>
                {product.desc}
              </p>

              {/* Tab Headers */}
              <div style={{ display: "flex", gap: 30, borderBottom: `1px solid ${COLORS.primaryRed}20`, marginBottom: 30 }}>
                <button
                  onClick={() => setActiveTab("description")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    fontSize: 16,
                    fontWeight: activeTab === "description" ? 700 : 500,
                    color: activeTab === "description" ? COLORS.primaryRed : COLORS.muted,
                    cursor: "pointer",
                    borderBottom: activeTab === "description" ? `2px solid ${COLORS.primaryRed}` : "none",
                    transition: "all 0.3s ease"
                  }}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("additional")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    fontSize: 16,
                    fontWeight: activeTab === "additional" ? 700 : 500,
                    color: activeTab === "additional" ? COLORS.primaryRed : COLORS.muted,
                    cursor: "pointer",
                    borderBottom: activeTab === "additional" ? `2px solid ${COLORS.primaryRed}` : "none",
                    transition: "all 0.3s ease"
                  }}
                >
                  Additional information
                </button>
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
                    <h3 className="playfair" style={{ fontSize: 18, fontWeight: 700, color: COLORS.charcoal, marginBottom: 20 }}>
                      PRODUCT INFORMATION
                    </h3>
                    <div>
                      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                        <strong style={{ color: COLORS.charcoal }}>Available Product Sizes:</strong> {productInfo.availableSizes.join(', ')}
                      </p>
                      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                        <strong style={{ color: COLORS.charcoal }}>Rich Color and Aroma:</strong> {productInfo.richColorAroma}
                      </p>
                      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                        <strong style={{ color: COLORS.charcoal }}>Packaging:</strong> {productInfo.packaging}
                      </p>
                      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                        <strong style={{ color: COLORS.charcoal }}>Hygiene:</strong> {productInfo.hygiene}
                      </p>
                      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginBottom: 15 }}>
                        <strong style={{ color: COLORS.charcoal }}>Elevate Your Cooking Experience:</strong> {productInfo.elevateCooking}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "additional" && (
                  <div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                          <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal, width: "40%" }}>Product Sizes</td>
                          <td style={{ padding: "12px 0", color: COLORS.muted }}>{additionalInfo.productSizes}</td>
                        </tr>
                        <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                          <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Category</td>
                          <td style={{ padding: "12px 0", color: COLORS.muted }}>{additionalInfo.category}</td>
                        </tr>
                        <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                          <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Storage</td>
                          <td style={{ padding: "12px 0", color: COLORS.muted }}>{additionalInfo.storage}</td>
                        </tr>
                        <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                          <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Shelf Life</td>
                          <td style={{ padding: "12px 0", color: COLORS.muted }}>{additionalInfo.shelfLife}</td>
                        </tr>
                        <tr style={{ borderBottom: `1px solid ${COLORS.primaryRed}10` }}>
                          <td style={{ padding: "12px 0", fontWeight: 600, color: COLORS.charcoal }}>Certification</td>
                          <td style={{ padding: "12px 0", color: COLORS.muted }}>{additionalInfo.certification}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>

              {/* Back to Products Button */}
              <button
                onClick={handleBackToProducts}
                style={{
                  padding: "12px 24px",
                  borderRadius: 50,
                  border: `1.5px solid ${COLORS.primaryRed}`,
                  background: "transparent",
                  color: COLORS.primaryRed,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  marginTop: 30
                }}
              >
                ← Back to Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>
     
    </div>
  );
};