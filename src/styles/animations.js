export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};