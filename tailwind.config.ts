import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#070913",
          surface: "#0e1322",
          card: "rgba(18, 24, 43, 0.7)",
          cardHover: "rgba(28, 37, 65, 0.85)",
          border: "rgba(255, 255, 255, 0.08)",
          borderMedium: "rgba(255, 255, 255, 0.15)",
          primary: "#6366f1",
          primaryLight: "#818cf8",
          secondary: "#06b6d4",
          emerald: "#10b981",
          pink: "#f472b6",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "Outfit", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(99, 102, 241, 0.25)",
        emeraldGlow: "0 0 30px rgba(16, 185, 129, 0.2)",
        cardLg: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
        "grad-primary-hover": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #c026d3 100%)",
        "grad-secondary": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        "grad-emerald": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "grad-brand-text": "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
