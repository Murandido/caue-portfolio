import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopate: "var(--font-syncopate)",
        gelica: "var(--font-gelica)",
      },
      colors: {
        primary: {
          50: "#fff9ea",
          100: "#fff6e0",
          300: "#feedbe",
          400: "#fdc52e",
          500: "#e4b129",
          600: "#ca9e25",
          700: "#be9423",
          800: "#98761c",
          900: "#725915",
          suporte: "#FEF0CB",
        },
        secondary: {
          50: "#fffefa",
          100: "#fffdf7",
          200: "#fffaef",
          300: "#fef0cb",
          400: "#e5d8b7",
          500: "#cbc0a2",
          600: "#bfb498",
          700: "#98907a",
          800: "#726c5b",
          900: "#595447",
        },
        tertiary: {
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f1f1f1",
          400: "#d9d9d9",
          500: "#c1c1c1",
          600: "#b5b5b5",
          700: "#919191",
          800: "#6c6c6c",
          900: "#545454",
        },
      },
      screens: {
        xs: "512px",
        xxs: "384px",
        minimum: "224px",
      },
      minWidth: {
        minimum: "224px",
      },
    },
  },
  plugins: [],
};
export default config;
