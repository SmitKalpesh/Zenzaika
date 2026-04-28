import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, NAV_ITEMS } from "../../../data/constants";

export const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    checkScroll();
    
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = activePage === "Home";
  
  // Handle Home click - always scroll to top
  const handleHomeClick = () => {
    if (activePage === "Home") {
      // If already on Home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on different page, navigate to Home
      setActivePage("Home");
    }
  };
  
  // For homepage: dark glass effect (always)
  // For other pages: normal white background
  const getNavbarStyle = () => {
    if (isHomePage) {
      return {
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.15)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
      };
    } else {
      return {
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "none",
        boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      };
    }
  };

  const navbarStyle = getNavbarStyle();
  
  const getTextColor = () => {
    if (!isHomePage) {
      return COLORS.charcoal;
    }
    return "#fff";
  };

  const getLogoColor = () => {
    if (!isHomePage) {
      return COLORS.charcoal;
    }
    return "#fff";
  };

  const getButtonStyle = () => {
    if (!isHomePage) {
      return "btn-primary";
    }
    return "btn-outline-white";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        ...navbarStyle,
        transition: "all 0.4s ease",
        padding: "0 5vw",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
      <motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
  onClick={handleHomeClick}
>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    
    {/* Logo */}
    <img
      src="/src/assets/Zenzaikablacklogo.png"
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
        marginTop: 4,
        color:
          getLogoColor() === COLORS.charcoal
            ? COLORS.muted
            : "rgba(255,255,255,0.65)",
        textTransform: "uppercase",
        fontWeight: 500,
      }}
    >
      Foods & Spices
    </div>

  </div>
</motion.div>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
          {NAV_ITEMS.map((item, i) => {
            const isActive = activePage === item;
            let textColor;
            if (isActive) {
              textColor = !isHomePage ? COLORS.primaryRed : COLORS.gold;
            } else {
              textColor = getTextColor();
            }
            
            const handleClick = () => {
              if (item === "Home") {
                handleHomeClick();
              } else {
                setActivePage(item);
              }
            };
            
            return (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`nav-link${isActive ? " active" : ""}`}
                style={{ 
                  color: textColor,
                  cursor: "pointer",
                  fontWeight: isActive ? 600 : 500,
                }}
                onClick={handleClick}
              >
                {item}
              </motion.a>
            );
          })}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={getButtonStyle()}
            style={{ padding: "10px 22px", fontSize: 13 ,backgroundColor:COLORS.deepRed}}
            onClick={() => setActivePage("Contact")}
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ 
            display: "none", 
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            fontSize: 22,
            color: getTextColor()
          }} 
          className="mobile-menu-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <style>{`
        .nav-link.active::after {
          background: ${!isHomePage ? COLORS.primaryRed : COLORS.gold} !important;
        }
        .nav-link::after {
          background: ${!isHomePage ? COLORS.primaryRed : COLORS.gold} !important;
        }
      `}</style>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              background: !isHomePage ? "rgba(255,255,255,0.98)" : "rgba(0,0,0,0.5)", 
              backdropFilter: !isHomePage ? "none" : "blur(15px)",
              padding: "20px 5vw", 
              borderTop: !isHomePage ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(212,175,55,0.2)",
              borderRadius: "0 0 20px 20px"
            }}
          >
            {NAV_ITEMS.map(item => {
              const handleClick = () => {
                if (item === "Home") {
                  if (activePage === "Home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setActivePage("Home");
                  }
                } else {
                  setActivePage(item);
                }
                setMenuOpen(false);
              };
              
              return (
                <div key={item} style={{ 
                  padding: "12px 0", 
                  borderBottom: !isHomePage ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(212,175,55,0.15)", 
                  cursor: "pointer", 
                  fontSize: 15, 
                  fontWeight: 500, 
                  color: activePage === item ? (!isHomePage ? COLORS.primaryRed : COLORS.gold) : (!isHomePage ? COLORS.charcoal : "#fff")
                }}
                  onClick={handleClick}>
                  {item}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};