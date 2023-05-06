/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "hero-landing": "url('./../src/images/another.jpeg')",
        "blog-hero": "url('./../src/images/backnew.jpeg')",
        "fintech-hero": "url('./../src/images/fintech.jpeg')",
        "crypto-hero": "url('./../src/images/manyCrypto.jpeg')",
        "forex-hero": "url('./../src/images/forex.jpeg')",
        "online-hero": "url('./../src/images/online.jpeg')",
        "ai-hero": "url('./../src/images/ai.jpeg')",
      },
      colors: {
        "nitda-primary": "#6ECIE4",
        "nitda-secondary": "#54595F",
        "nitda-text": "#7A7A7A",
        "nitda-accent-green": "#61CE70",
        "nitda-cyan-bluish-gray": "#abb8c3",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
        number: "number",
      },
    },
  },
  plugins: [],
};
