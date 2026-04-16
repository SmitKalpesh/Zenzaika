import { useRef } from "react";
import { Hero } from "../components/home/Hero";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { AboutPreview } from "../components/home/AboutPreview";
import { ProductHighlights } from "../components/products/ProductHighlights";
import { Testimonials } from "../components/home/Testimonials";

export const HomePage = ({ setActivePage }) => {
  const aboutPreviewRef = useRef(null);

  const scrollToAboutPreview = () => {
    if (aboutPreviewRef.current) {
      const element = aboutPreviewRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const navbarHeight = 72; // Navbar height
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <Hero setActivePage={setActivePage} scrollToAboutPreview={scrollToAboutPreview} />
      <CategoriesSection setActivePage={setActivePage} />
      {/* Add an id and adjust padding/margin for mobile */}
      <div 
        ref={aboutPreviewRef} 
        id="about-preview-section"
        style={{ scrollMarginTop: "80px" }}
      >
        <AboutPreview setActivePage={setActivePage} />
      </div>
      <ProductHighlights setActivePage={setActivePage} />
      <Testimonials />
    </div>
  );
};