/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/styles.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1DA1F2",
          light: "#71C9F8",
          dark: "#1477B8",
          subtle: "#D4E8FA",
        },
        secondary: {
          DEFAULT: "#6C757D",
          light: "#868E96",
          dark: "#343A40",
          subtle: "#E4E6EA",
        },
        accent: {
          DEFAULT: "#8A2BE2",
          light: "#B39DDB",
          dark: "#6A1B9A",
          subtle: "#EADAF6",
        },
        success: {
          DEFAULT: "#28A745",
          light: "#6FCF97",
          dark: "#1B5E20",
          subtle: "#DFF3E3",
        },
        warning: {
          DEFAULT: "#FFC107",
          light: "#FFD54F",
          dark: "#FFA000",
          subtle: "#FFF4DA",
        },
        danger: {
          DEFAULT: "#DC3545",
          light: "#F28B82",
          dark: "#A71D33",
          subtle: "#F9D8D9",
        },
        info: {
          DEFAULT: "#17A2B8",
          light: "#4DD0E1",
          dark: "#138496",
          subtle: "#D3EEF3",
        },
        dark: "#14171A",
        light: "#F8F9FA",
        white: "#FFFFFF",
        black: "#000000",
      },
      screens: {
        mobile: "480px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      container: {
        center: true,
        padding: "1rem",
        maxWidth: "90%",
      },
    },
  },
  plugins: [],
};
