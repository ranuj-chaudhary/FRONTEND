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
        "border-spin-anticlockwise": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
       
        "border-spin-slow-clockwise": {
          "0%": {
            opacity: 0.5,
         },
         "25%": {
            opacity: 1,
           },
         "75%": {
            opacity: 0.9,
            },
        "100%": {
            opacity: 0,
             transform: "rotate(200deg)",
           
         },
          
        },
         "box-spin-slow-clockwise": {
          "100%": {
            transform: "rotate(300deg)",
          },
        },
         "box-spin-linear-slow-anticlockwise": {
          "0%": {
            opacity: 0,
          },
          "5%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(-180deg)",
             opacity: 0,
          },
        },
      },
      animation: {
        "circle-spin-anticlockwise":
          "circle-spin-anticlockwise 20s linear  infinite",
        "circle-spin-clockwise":
          "circle-spin-clockwise 20s linear 500ms infinite",
        "border-spin-anticlockwise": "border-spin-anticlockwise 5s ease-in infinite",
        "border-spin-slow-clockwise": "border-spin-slow-clockwise 15s  cubic-bezier(0.585, 0, 0.285, 1) infinite both",
        "box-spin-slow-clockwise": "box-spin-slow-clockwise 10s linear infinite",
        "box-spin-linear-slow-anticlockwise": "box-spin-linear-slow-anticlockwise 10s linear 5s infinite",
      },
    },
  },
  plugins: [],
};
