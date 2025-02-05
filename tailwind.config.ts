import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "960px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
