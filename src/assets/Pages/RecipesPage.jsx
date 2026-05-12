import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../data/constants";
import recipesData from "../../data/recipes.json";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ChevronRight } from 'lucide-react';

export const RecipesPage = ({ setActivePage }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const recipes = recipesData.recipes;

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  // Function to split ingredients into sections based on recipe name
  const getIngredientSections = (recipe) => {
    const sections = [];
    let currentSection = { title: "", items: [] };
    
    for (const ingredient of recipe.ingredients) {
      // Check for section headers
      if (ingredient === "For Chhole:" || ingredient === "For Chhole" || 
          ingredient === "For Cooking:" || ingredient === "For Cooking" ||
          ingredient === "For Chicken:" || ingredient === "For Chicken" ||
          ingredient === "For Marination:" || ingredient === "For Marination" ||
          ingredient === "For Paneer:" || ingredient === "For Paneer" ||
          ingredient === "For Bhaji:" || ingredient === "For Bhaji" ||
          ingredient === "For Misal:" || ingredient === "For Misal" ||
          ingredient === "For Gravy:" || ingredient === "For Gravy") {
        
        if (currentSection.title && currentSection.items.length > 0) {
          sections.push({ ...currentSection });
        }
        currentSection = { title: ingredient.replace(':', ''), items: [] };
      } 
      // Skip empty strings
      else if (ingredient && ingredient.trim() !== "") {
        currentSection.items.push(ingredient);
      }
    }
    
    // Push the last section
    if (currentSection.title && currentSection.items.length > 0) {
      sections.push(currentSection);
    }
    
    return sections;
  };

  // Function to clean and number instructions
  const getNumberedInstructions = (instructions) => {
    const cleaned = instructions.filter((s) => s && s.trim() !== "");
    const numbered = [];
    
    for (let i = 0; i < cleaned.length; i++) {
      const step = cleaned[i];
      if (step.match(/^\d+\./)) {
        numbered.push(step);
      } else {
        numbered.push(`${i + 1}. ${step}`);
      }
    }
    
    return numbered;
  };

  // =========================
  // DETAIL VIEW
  // =========================
  if (selectedRecipe) {
    const numberedInstructions = getNumberedInstructions(selectedRecipe.instructions);
    const ingredientSections = getIngredientSections(selectedRecipe);

    return (
      <div style={{ paddingTop: 72 }}>
        <Breadcrumbs activePage="Recipes" setActivePage={setActivePage} />

        <section style={{ background: COLORS.skinLight, padding: "60px 5vw" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* BACK BUTTON */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleBackToRecipes}
              style={{
                background: "none",
                border: "none",
                color: COLORS.primaryRed,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 30,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              whileHover={{ x: -5 }}
            >
              ← Back to Recipes
            </motion.button>

            {/* =========================
                GRID: IMAGE + INGREDIENTS
            ========================= */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "start",
              }}
              className="responsive-grid"
            >

              {/* LEFT: IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderRadius: 20,
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: `1px solid ${COLORS.primaryRed}10`,
                  overflow: "hidden",
                }}
              >
                {selectedRecipe.image ? (
                  <img 
                    src={selectedRecipe.image} 
                    alt={selectedRecipe.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "800px",
                      maxHeight: "800px",
                      objectFit: "cover",
                      margin: "0 auto",
                      borderRadius: 24,
                
                    }}
                  />
                ) : (
                  <div style={{ fontSize: 200, padding: "40px" }}>
                    🍲
                  </div>
                )}
              </motion.div>

              {/* RIGHT: INGREDIENTS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="playfair" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: COLORS.charcoal, marginBottom: 16 }}>
                  {selectedRecipe.name}
                </h1>
                
                <p
                  style={{
                    fontSize: 15,
                    color: COLORS.muted,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {selectedRecipe.description}
                </p>

                <div style={{ marginBottom: 20 }}>
                  <span style={{ 
                    background: COLORS.primaryRed, 
                    color: "#fff", 
                    padding: "6px 14px", 
                    borderRadius: 20, 
                    fontSize: 13,
                    fontWeight: 600,
                    display: "inline-block"
                  }}>
                    Made with {selectedRecipe.masalaName}
                  </span>
                </div>

                {/* INGREDIENTS LIST */}
                <div>
                  <h3 className="playfair" style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: COLORS.charcoal }}>
                    INGREDIENTS
                  </h3>

                  <div style={{ 
                    background: COLORS.white, 
                    borderRadius: 16, 
                    padding: "20px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    border: `1px solid ${COLORS.primaryRed}10`,
                  }}>
                    {ingredientSections.map((section, sectionIdx) => (
                      <div key={sectionIdx} style={{ marginBottom: sectionIdx < ingredientSections.length - 1 ? 20 : 0 }}>
                        {/* Section Header */}
                        <div
                          style={{
                            background: COLORS.gold,
                            padding: "6px 12px",
                            fontWeight: 700,
                            borderRadius: 8,
                            marginBottom: 12,
                            color: "#fff",
                            fontSize: 13,
                            display: "inline-block",
                          }}
                        >
                          {section.title}
                        </div>
                        
                        {/* Section Items in 2 columns */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "8px 20px",
                            marginTop: 12,
                          }}
                        >
                          {section.items.map((item, idx) => (
                            <div
                              key={idx}
                              style={{
                                fontSize: 13,
                                color: COLORS.muted,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                              }}
                            >
                              <span style={{ color: COLORS.accentGreen }}>✓</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =========================
                COOKING INSTRUCTIONS
            ========================= */}
            {numberedInstructions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ marginTop: 60 }}
              >
                <h3
                  className="playfair"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 20,
                    color: COLORS.primaryRed,
                  }}
                >
                  👩‍🍳 COOKING INSTRUCTIONS
                </h3>

                <div
                  style={{
                    background: COLORS.skinLight,
                    padding: "30px",
                    borderRadius: 20,
                    border: `1px solid ${COLORS.primaryRed}10`,
                  }}
                >
                  {numberedInstructions.map((step, i) => {
                    const stepNumber = step.match(/^\d+\./)?.[0]?.replace('.', '') || (i + 1);
                    const stepText = step.replace(/^\d+\.\s*/, '');
                    
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 15,
                          marginBottom: 16,
                          padding: "12px 20px",
                          background: COLORS.white,
                          borderRadius: 12,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                        }}
                      >
                        <div
                          style={{
                            minWidth: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: COLORS.primaryRed,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            fontWeight: 700,
                          }}
                        >
                         <ChevronRight />
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 14,
                            color: COLORS.charcoal,
                            lineHeight: 1.6,
                            flex: 1,
                          }}
                        >
                          {stepText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Back to Recipes Button at bottom */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={handleBackToRecipes}
              style={{
                padding: "12px 24px",
                borderRadius: 50,
                border: `1.5px solid ${COLORS.primaryRed}`,
                background: "transparent",
                color: COLORS.primaryRed,
                cursor: "pointer",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                marginTop: 40,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = COLORS.primaryRed;
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = COLORS.primaryRed;
              }}
            >
              ← Back to Recipes
            </motion.button>
          </div>
        </section>
      </div>
    );
  }

  // =========================
  // LIST VIEW - Same styling as ProductsGrid
  // =========================
  return (
    <div style={{ paddingTop: 72 }}>
      <Breadcrumbs activePage="Recipes" setActivePage={setActivePage} />

      <div style={{ background: `linear-gradient(135deg, ${COLORS.primaryRed}, ${COLORS.deepRed})`, padding: "60px 5vw 50px", textAlign: "center" }}>
        <span className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: COLORS.lightGold }}>
          Our Recipes
        </span>
        <h1 className="playfair" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", fontWeight: 700, marginTop: 12 }}>
          Cook with Zenzaika
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginTop: 12 }}>
          Delicious recipes made with our authentic spices
        </p>
      </div>

      <section style={{ background: COLORS.skinLight, padding: "60px 5vw 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 40,
            }}
          >
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  background: COLORS.white,
                  borderRadius: 24,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  border: `1px solid ${COLORS.primaryRed}10`,
                }}
                onClick={() => handleViewRecipe(recipe)}
              >
                <div
                  style={{
                    height: 350,
                    background: `linear-gradient(135deg, ${COLORS.primaryRed}15, ${COLORS.gold}15)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {recipe.image ? (
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: 80 }}>🍲</span>
                  )}
                
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 className="playfair" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: COLORS.charcoal }}>
                    {recipe.name}
                  </h3>
                  <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.6, marginBottom: 20 }}>
                    {recipe.description.substring(0, 100)}...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 12, color: COLORS.primaryRed, fontWeight: 600, background: `${COLORS.primaryRed}08`, padding: "4px 12px", borderRadius: 50 }}>
                      Easy Recipe
                    </span>
                    <motion.span 
                      whileHover={{ x: 5 }} 
                      style={{ fontSize: 14, color: COLORS.primaryRed, fontWeight: 600, cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewRecipe(recipe);
                      }}
                    >
                      View Recipe →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};