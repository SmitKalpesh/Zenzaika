import { useRef } from "react";
import { Hero } from "../components/home/Hero";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { AboutPreview } from "../components/home/AboutPreview";
import { ProductHighlights } from "../components/products/ProductHighlights";
import { Testimonials } from "../components/home/Testimonials";

export const HomePage = ({ setActivePage }) => {
  const aboutPreviewRef = useRef(null);

  const scrollToAboutPreview = () => {
    aboutPreviewRef.current?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

  return (
    <div>
      <Hero setActivePage={setActivePage} scrollToAboutPreview={scrollToAboutPreview} />
      <CategoriesSection setActivePage={setActivePage} />
      <div ref={aboutPreviewRef}>
        <AboutPreview setActivePage={setActivePage} />
      </div>
      <ProductHighlights setActivePage={setActivePage} />
      <Testimonials />
    </div>
  );
};