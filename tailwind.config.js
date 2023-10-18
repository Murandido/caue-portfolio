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
        primary: {
          50: "#fff9ea",
          100: "#fff6e0",
          200: "#feedbe",
          300: "#fdc52e",
          400: "#e4b129",
          500: "#ca9e25",
          600: "#be9423",
          700: "#98761c",
          800: "#725915",
          900: "#594510",
        },
        secondary: {
          50: "#f5f5f5",
          100: "#f0f0f0",
          200: "#dfdfdf",
          300: "#989898",
          400: "#898989",
          500: "#7a7a7a",
          600: "#727272",
          700: "#5b5b5b",
          800: "#444444",
          900: "#353535",
        },
        tertiary: {
          50: "#fbfbfb",
          100: "#f9f9f9",
          200: "#f3f3f3",
          300: "#d9d9d9",
          400: "#c3c3c3",
          500: "#aeaeae",
          600: "#a3a3a3",
          700: "#828282",
          800: "#626262",
          900: "#4c4c4c",
        },
      },

      screens: {
        xs: "384px",
      },
    },
  },
  plugins: [],
};
