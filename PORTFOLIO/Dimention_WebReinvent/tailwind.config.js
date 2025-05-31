module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "circle-spin-anticlockwise": {
          "0%": {
            transform: "rotate(0deg)",
            opacity: 0,
          },
          "25%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 0.75,
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(-360deg)",
            opacity: 0,
          },
        },
        "circle-spin-clockwise": {
          "0%": {
            transform: "rotate(0deg)",
            opacity: 0,
          },
          "25%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 0.75,
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(360deg)",
            opacity: 0,
          },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "circle-spin-anticlockwise":
          "circle-spin-anticlockwise 20s linear  infinite",
        "circle-spin-clockwise":
          "circle-spin-clockwise 20s linear 500ms infinite",
        "border-spin": "border-spin 6s ease-in infinite",
      },
    },
  },
  plugins: [],
};
