/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: "var(--font-roboto-slab)",
        righteous: "var(--font-righteous)",
      },

      colors: {
        black: {
          50: "#e9e9e9",
          100: "#dedede",
          200: "#babbba",
          300: "#212322",
          400: "#1e201f",
          500: "#1a1c1b",
          600: "#191a1a",
          700: "#141514",
          800: "#0f100f",
          900: "#0c0c0c",
        },
        primary: {
          50: "#f7f5f5",
          100: "#f3f0f0",
          200: "#e5dfe1",
          300: "#ac989d",
          400: "#9b898d",
          500: "#8a7a7e",
          600: "#817276",
          700: "#675b5e",
          800: "#4d4447",
          900: "#3c3537",
        },
        secondary: {
          50: "#fcfcfd",
          100: "#fbfbfb",
          200: "#f7f6f7",
          300: "#e5e1e6",
          400: "#cecbcf",
          500: "#b7b4b8",
          600: "#aca9ad",
          700: "#89878a",
          800: "#676567",
          900: "#504f51",
        },
      },
    },
  },
  plugins: [],
};
