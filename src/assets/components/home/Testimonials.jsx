
import { motion } from "framer-motion";
import { COLORS } from "../../../data/constants";
import { ScrollRevealSection } from "../common/ScrollRevealSection";
import { StarRating } from "../common/StarRating";

export const Testimonials = () => {
  const testimonials = [
    { 
      name: "Priya Shah", 
      role: "Homemaker", 
      text: "Honestly, the aroma itself tells you the difference. The turmeric and chilli powders feel fresh, not like the usual packaged ones. You can actually see and taste the purity.",
      rating: 5 
    },
    { 
      name: "Rakesh Mehta", 
      role: "Home Chef", 
      text: "Cooking feels different now. The flavours remind me of the spices we used at home growing up. It's rare to find that authenticity today.",
      rating: 5 
    },
    { 
      name: "Neha Patel", 
      role: "Working Professional", 
      text: "What I loved is the packaging — it actually keeps the spices fresh for long. No moisture, no loss of aroma. That's something most brands fail at.",
      rating: 5 
    },
    { 
      name: "Amit Jain", 
      role: "Retailer", 
      text: "We've been sourcing spices in bulk, and consistency is always an issue. With Zenzaika, the quality has been uniform in every batch — that's what matters in business.",
      rating: 5 
    },
  ];

  // Duplicate testimonials for seamless marquee effect
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section style={{ background: COLORS.skinWarm, padding: "100px 5vw", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollRevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-badge">Testimonials</span>
            <h2 className="playfair" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, marginTop: 16, color: COLORS.charcoal }}>
              What Our Customers Say
            </h2>
            <p style={{ fontSize: 16, color: COLORS.muted, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Loved by home cooks, chefs, and businesses alike
            </p>
          </div>
        </ScrollRevealSection>

        {/* Marquee Slider */}
        <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            style={{
              display: "flex",
              gap: 28,
              width: "fit-content",
            }}
          >
            {marqueeTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                style={{
                  background: COLORS.white,
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  width: 350,
                  flexShrink: 0,
                }}
              >
                <StarRating count={testimonial.rating} />
                <p style={{ fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "20px 0", fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.gold})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.charcoal }}>{testimonial.name}</div>
                    <div style={{ fontSize: 12, color: COLORS.muted }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};