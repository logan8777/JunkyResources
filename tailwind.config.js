/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#757575",
          "200": "#1a1b30",
          "300": "#1d1818",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(0, 0, 0, 0.1)",
          "600": "rgba(0, 0, 0, 0.6)",
          "700": "rgba(0, 0, 0, 0.4)",
        },
        black: "#000",
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e2e2e2",
          "300": "#e0e0e0",
          "400": "rgba(230, 230, 230, 0.6)",
          "500": "rgba(230, 230, 230, 0.09)",
        },
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f2f2f2",
          "300": "#f0f0f0",
        },
        forestgreen: {
          "100": "rgba(14, 159, 46, 0.6)",
          "200": "rgba(14, 159, 46, 0.8)",
          "300": "rgba(14, 159, 46, 0.85)",
        },
        silver: {
          "100": "#bdbdbd",
          "200": "rgba(189, 189, 189, 0.99)",
        },
        palevioletred: "#ba6683",
        blanchedalmond: "#f3e7c6",
        darkolivegreen: "#4d511d",
        darkslategray: "#2d2d2d",
        seagreen: "#2d904e",
        red: "#d91414",
        limegreen: "rgba(28, 215, 46, 0.58)",
        crimson: "#e13b3f",
        lightblue: "#a8d1e7",
      },
      spacing: {},
      fontFamily: {
        "pt-sans": "'PT Sans'",
        satoshi: "Satoshi",
        "integral-cf": "'Integral CF'",
        outfit: "Outfit",
        poppins: "Poppins",
        "radio-canada": "'Radio Canada'",
      },
      borderRadius: {
        xl: "20px",
        "43xl": "62px",
        "7xs-4": "5.4px",
        "8xs": "5px",
        "3xs": "10px",
        "6xs": "7px",
        "6xl": "25px",
        "69xl": "88px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      sm: "14px",
      "3xl": "22px",
      xl: "20px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "11xl": "30px",
      mini: "15px",
      "6xl": "25px",
      "17xl": "36px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
