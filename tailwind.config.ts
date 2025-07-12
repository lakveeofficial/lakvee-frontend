import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",        
        secondary: "#0090ae",    
        accent: "#0090ae",         
        background: "#F8FAFC",     
        text: "#0F172A",           

      },
      backgroundImage: {
        hero: "url('/images/517476-cn-tower.webp')", // updated home background
        certificate: "url('/images/certificate.png')", 
      }
    },
  },
  plugins: [],
};

export default config;