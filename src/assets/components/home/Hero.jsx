import { useState, useEffect } from "react";
import { COLORS } from "../../../data/constants";

export const Hero = ({ setActivePage, scrollToAboutPreview }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", 
      position: "relative", 
      overflow: "hidden",
      display: "flex", 
      flexDirection: "column",
      justifyContent: "center",
      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(192,57,43,0.4) 50%, rgba(0,0,0,0.4) 100%), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "scroll",
    }}>
      {/* Static overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 30% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      
      {/* Static decorative elements - visible on desktop only */}
    

      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: isMobile ? "80px 5vw 20px" : "100px 5vw 0", 
        display: "grid", 
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
        gap: isMobile ? 40 : 60, 
        alignItems: "center", 
        width: "100%" 
      }}>
        
        {/* Left Side - Text Content */}
        <div style={{ 
          background: isMobile ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)",
          backdropFilter: isMobile ? "none" : "blur(15px)",
          borderRadius: isMobile ? "20px" : "30px",
          padding: isMobile ? "30px 25px" : "45px 40px",
          border: "1px solid rgba(212,175,55,0.3)"
        }}>
          <div
            className="section-badge"
            style={{ 
              marginBottom: 24, 
              background: "rgba(0,0,0,0.5)", 
              backdropFilter: isMobile ? "none" : "blur(8px)", 
              color: COLORS.gold, 
              borderColor: COLORS.gold,
              display: "inline-block",
              fontSize: isMobile ? 10 : 12
            }}
          >
            ✦ Zenzaika Foods & Spices ✦
          </div>

          <h1 className="playfair" style={{ 
            fontSize: isMobile ? "clamp(32px, 8vw, 50px)" : "clamp(40px, 5vw, 70px)", 
            fontWeight: 800, 
            color: "#fff", 
            lineHeight: 1.2, 
            marginBottom: 12, 
            textShadow: "0 2px 10px rgba(0,0,0,0.3)" 
          }}>
            Not Just Spices.
          </h1>
          
          <h2 className="playfair" style={{ 
            fontSize: isMobile ? "clamp(28px, 6vw, 45px)" : "clamp(35px, 4.5vw, 60px)", 
            fontWeight: 700, 
            fontStyle: "italic", 
            lineHeight: 1.3, 
            marginBottom: 20, 
            color: "#fff", 
            textShadow: "0 2px 10px rgba(0,0,0,0.3)" 
          }}>
            It's the Taste <span style={{ color: COLORS.gold }}>Your Kitchen Deserves.</span>
          </h2>

          <p style={{ 
            fontSize: isMobile ? 15 : 17, 
            color: "#fff", 
            lineHeight: 1.6, 
            marginBottom: 25, 
            fontWeight: 400, 
            textShadow: "0 1px 5px rgba(0,0,0,0.2)" 
          }}>
            From handpicked farms to perfectly sealed packs — we deliver purity, aroma, and authenticity in every pinch.
          </p>

          {/* Trust Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 8 : 12 }}>
            {["100% Pure", "No Artificial Preservatives", "FSSAI Certified", "Sourced Across India"].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: isMobile ? "none" : "blur(5px)",
                  padding: isMobile ? "6px 14px" : "8px 18px",
                  borderRadius: 50,
                  border: `1px solid ${COLORS.gold}`,
                  fontSize: isMobile ? 10 : 12,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: 0.5,
                }}
              >
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Buttons Container (Desktop only) */}
        {!isMobile && (
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            gap: 25,
          }}>
            <button 
              style={{ 
                padding: "16px 40px", 
                fontSize: 17, 
                fontWeight: 700, 
                background: COLORS.primaryRed,
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                minWidth: 240,
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)"
              }} 
              onClick={() => setActivePage("Products")}
            >
              Explore Our Products <span>→</span>
            </button>
            
            <button 
              style={{ 
                background: "rgba(0, 0, 0, 0.78)",
                color: COLORS.gold,
                border: `1px solid ${COLORS.gold}`,
                borderRadius: "50px",
                padding: "15px 38px",
                fontSize: 17,
                fontWeight: 600,
                cursor: "pointer",
                width: "100%",
                minWidth: 240,
                fontFamily: "'Poppins', sans-serif"
              }}
              onClick={scrollToAboutPreview}
            >
              Our Story
            </button>
          </div>
        )}
      </div>

      {/* Mobile Buttons - Stacked vertically at bottom */}
      {isMobile && (
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          gap: 15,
          padding: "20px 5vw 40px",
          width: "100%"
        }}>
          <button 
            style={{ 
              padding: "14px 30px", 
              fontSize: 15, 
              fontWeight: 700, 
              background: COLORS.primaryRed,
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              width: "100%",
              maxWidth: 280,
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 4px 15px rgba(0,0,0,0.25)"
            }} 
            onClick={() => setActivePage("Products")}
          >
            Explore Our Products <span>→</span>
          </button>
          
          <button 
            style={{ 
              background: "rgba(0, 0, 0, 0.7)",
              color: COLORS.gold,
              border: `1px solid ${COLORS.gold}`,
              borderRadius: "50px",
              padding: "13px 30px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              maxWidth: 280,
              fontFamily: "'Poppins', sans-serif"
            }}
            onClick={scrollToAboutPreview}
          >
            Our Story
          </button>
        </div>
      )}
    </section>
  );
};