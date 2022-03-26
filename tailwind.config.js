module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      vxvs: "10px",
      xvs: "12px",
      vs: "13px",
      xm: "14px",
      sm: "15px",
      ms: "16px",
      md: "18px",
      base: "22px",
      xmd: "26px",
      lg: "32px",
      xl: "40px",
      xxl: "50px",
      xxlg: "60px",
    },
    screens: {
      vs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    width: {
      "1/6": "16.666667%",
      "0/7": "11.666667%",
      "1/7": "15.333333%",
      "1/9": "22.571429%",
      "sidbar-sm": "19.333333%",
      "2/7": "28.5714286%",
      "3/4": "30.333333%",
      "3/7": "42.8571429%",
      4: "50%",
      "4/1": "54.142857%",
      "4/7": "57.1428571%",
      "5/2": "65.17%",
      "5/7": "71.4285714%",
      "5/8": "76.333333%",
      "5/9": "77.333333%",
      6: "79.1%",
      "6/1": "84.333333%",
      "6/7": "85.7142857%",
      "7/1": "90.7142857%",
      "7/7": "95.7142857%",
      "8/1": "99.7142857%",
      10: "100%",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "765px",
          },
          "@screen lg": {
            maxWidth: "1320px",
          },
          "@screen xl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
