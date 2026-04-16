import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COLORS } from "../../../data/constants";
import { floatAnimation, pulseAnimation } from "../../../styles/animations";

gsap.registerPlugin(ScrollTrigger);

export const Hero = ({ setActivePage, scrollToAboutPreview }) => {
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const contentRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=70%",
          scrub: 1.5,
          onComplete: () => {
            setTimeout(() => {
              pinTrigger.kill();
            }, 100);
          }
        }
      });

      tl.to(textContainerRef.current, {
        scale: 1.6,
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, 0);

      tl.to(rightSideRef.current, {
        scale: 2.2,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, 0);

      tl.to(headingRef.current, {
        scale: 1.8,
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 0);

      tl.to(subHeadingRef.current, {
        scale: 1.6,
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 0);

      tl.to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, 0.5);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} style={{
      minHeight: "100vh", 
      position: "relative", 
      overflow: "hidden",
      display: "flex", 
      alignItems: "center",
      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(192,57,43,0.35) 50%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "scroll",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      
      <motion.div {...pulseAnimation} style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(212,175,55,0.08)", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: "absolute", bottom: -150, left: -100, width: 600, height: 600, borderRadius: "50%", background: "rgba(244,219,200,0.06)", pointerEvents: "none" }} />
      
      <motion.div {...floatAnimation} style={{ position: "absolute", top: "15%", right: "10%", fontSize: 60, opacity: 0.35, pointerEvents: "none" }}>🌶️</motion.div>
      <motion.div {...floatAnimation} style={{ position: "absolute", bottom: "20%", right: "20%", fontSize: 52, opacity: 0.3, pointerEvents: "none", animationDelay: "1s" }}>🫙</motion.div>
      <motion.div {...floatAnimation} style={{ position: "absolute", top: "50%", left: "5%", fontSize: 45, opacity: 0.28, pointerEvents: "none", animationDelay: "0.5s" }}>🌿</motion.div>
      <motion.div {...floatAnimation} style={{ position: "absolute", bottom: "10%", left: "15%", fontSize: 40, opacity: 0.3, pointerEvents: "none", animationDelay: "1.5s" }}>✨</motion.div>

      <div ref={contentRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw", paddingTop: 100, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%" }}>
        
        {/* Left Side - Text Content with Blur Background */}
        <div ref={textContainerRef} style={{ 
          transformOrigin: "center left",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "45px 40px",
          border: "1px solid rgba(212,175,55,0.3)"
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="section-badge"
            style={{ marginBottom: 24, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: COLORS.gold, borderColor: COLORS.gold }}
          >
            ✦ Zenzaika Foods & Spices ✦
          </motion.div>

          <h1 ref={headingRef} className="playfair" style={{ fontSize: "clamp(40px, 5vw, 70px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 16, textShadow: "0 2px 15px rgba(0,0,0,0.3)" }}>
            Not Just Spices.
          </h1>
          
          <h2 ref={subHeadingRef} className="playfair" style={{ fontSize: "clamp(35px, 4.5vw, 60px)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.2, marginBottom: 25, color: "#fff", textShadow: "0 2px 15px rgba(0,0,0,0.3)" }}>
            It's the Taste <span style={{ color: COLORS.gold, textShadow: "0 2px 15px rgba(0,0,0,0.3)" }}>Your Kitchen Deserves.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: 17, color: "#fff", lineHeight: 1.7, marginBottom: 30, fontWeight: 400, textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
          >
            From handpicked farms to perfectly sealed packs — we deliver purity, aroma, and authenticity in every pinch.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            {["100% Pure", "No Artificial Preservatives", "FSSAI Certified", "Sourced Across India"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                style={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(5px)",
                  padding: "8px 18px",
                  borderRadius: 50,
                  border: `1px solid ${COLORS.gold}`,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: 0.5,
                }}
              >
                ✓ {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Buttons Container */}
        <div ref={rightSideRef} style={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          gap: 25,
          transformOrigin: "center center"
        }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ width: "100%" }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }} 
              className="btn-primary" 
              style={{ 
                padding: "16px 40px", 
                fontSize: 17, 
                fontWeight: 700, 
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                width: "100%",
                minWidth: 240
              }} 
              onClick={() => setActivePage("Products")}
            >
              Explore Our Products <span>→</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ x: 30 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ width: "100%" }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }} 
              style={{ 
                background: "rgba(0, 0, 0, 0.78)",
                color: COLORS.gold,
                border: `1px solid ${COLORS.gold}`,
                borderRadius: "50px",
                padding: "15px 38px",
                fontSize: 17,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "100%",
                minWidth: 240,
                fontFamily: "'Poppins', sans-serif"
              }}
              onClick={scrollToAboutPreview}
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};