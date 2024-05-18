/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seashell: "#fffaf5",
        darkslategray: "#3e4e50",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f6f6f6",
          "300": "#ededed",
          "400": "rgba(248, 248, 248, 0.81)",
        },
        peachpuff: "#facfad",
        sandybrown: "#f5ac72",
        white: "#fff",
        gray: {
          "100": "#909090",
          "200": "#878690",
          "300": "#757575",
          "400": "#23292e",
          "500": "#000201",
          "600": "rgba(117, 117, 117, 0.09)",
          "700": "rgba(0, 0, 0, 0.25)",
        },
        gainsboro: "#d9d9d9",
        red: "#ff1616",
        dimgray: "#575c61",
        bisque: "#fee3ca",
        tomato: "#ff5050",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        raleway: "Raleway",
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        inter: "Inter",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      "5xl": "24px",
      "21xl": "40px",
      "6xl": "25px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
