/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      hero:'#827891',
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
      "sunrise-pattern" : "url('/src/assets/wepik-export-20230626210910sFhh.png')",
      "space" : "url('/src/assets/galaxy-night-view.jpg')",
      "sun" : "url('/src/assets/1459.jpg')",
      "sky" : "url('/src/assets/sky.png')"

    },
  },
};
export const plugins = [];