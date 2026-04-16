import { COLORS } from './constants';

export const CATEGORIES = [
  { 
    name: "Everyday Essentials", 
    icon: "🌶️", 
    desc: "The staples every Indian kitchen runs on", 
    items: ["Turmeric", "Red Chilli", "Coriander", "Cumin"],
    color: COLORS.primaryRed 
  },
  { 
    name: "Blended Masalas", 
    icon: "🫙", 
    desc: "Perfectly balanced flavours, ready to cook", 
    items: ["Garam Masala", "Kitchen King", "Sabzi Masala"],
    color: COLORS.gold 
  },
  { 
    name: "Ready-to-Use Mixes", 
    icon: "⚡", 
    desc: "Convenience without compromising taste", 
    items: ["Instant Mixes", "Marinades", "Seasoning Blends"],
    color: COLORS.accentOrange 
  },
];