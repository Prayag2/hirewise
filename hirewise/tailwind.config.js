/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "display": ["DM Sans"],
      "sans": ["Inter"]
    },
    colors: {
      "foreground": "#050505",
      "background": "#fafafa",
      "background-alt": "#EDEDED",
      "primary-dark": "#19baa9",
      "primary": "#1CCFBC",
      "primary-alt": "#CDF2EE",
      "accent-dark": "#464d86",
      "accent": "#5860a7",
      "accent-alt": "#dedfed",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "from": {opacity: "0"},
          "to": {opacity: "1"}
        },
        fadeOut: {
          "from": {opacity: "1"},
          "to": {opacity: "0"}
        },
        slide: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-1000%)"}
        }
      },
      animation: {
        "fade-in": "fadeIn 250ms forwards",
        "fade-out": "fadeOut 250ms forwards",
        "slide": "slide 60s linear infinite",
        "slide-reverse": "slide 60s linear infinite reverse"
      }
    },
  },
  plugins: [],
}

