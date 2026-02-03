/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "250px", max: "639px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors: {
      primary: "#001B0A",
      secondary: "#FFFFFF",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        DEFAULT: "#6b7280",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
      },
      lightGray: "#F2F2F2a6",
      textTitle: "#096A2E",
      buttonPrimary: "#8ABE53",
      buttonSecondary: "#E0E0E0",
      transparent: "transparent",
    },
  },
  plugins: [],
};
