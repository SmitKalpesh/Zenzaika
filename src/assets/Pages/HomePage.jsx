import { useRef, useState } from "react";
import { Hero } from "../components/home/Hero";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { AboutPreview } from "../components/home/AboutPreview";
import { ProductHighlights } from "../components/products/ProductHighlights";
import { Testimonials } from "../components/home/Testimonials";
import { ProductDetailPage } from "./ProductDetailPage";

export const HomePage = ({ setActivePage, setSelectedCategory }) => {
  const aboutPreviewRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToAboutPreview = () => {
    if (aboutPreviewRef.current) {
      const element = aboutPreviewRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const navbarHeight = 72;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // If a product is selected, show the detail page
  if (selectedProduct) {
    return (
      <ProductDetailPage 
        setActivePage={setActivePage} 
        product={selectedProduct}
        onBackToProducts={handleBackToProducts}
      />
    );
  }

  return (
    <div>
      <Hero setActivePage={setActivePage} scrollToAboutPreview={scrollToAboutPreview} />
      <CategoriesSection setActivePage={setActivePage} setSelectedCategory={setSelectedCategory} />
      <div 
        ref={aboutPreviewRef} 
        id="about-preview-section"
        style={{ scrollMarginTop: "80px" }}
      >
        <AboutPreview setActivePage={setActivePage} />
      </div>
      <ProductHighlights setActivePage={setActivePage} onProductClick={handleProductClick} />
      <Testimonials />
    </div>
  );
};