module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-pale-blue": "hsl(225, 100%, 94%)",
        "primary-bright-blue": "hsl(245, 75%, 52%)",
        "neutral-pale-blue": " hsl(225, 100%, 98%)",
        "neutral-desaturated-blue": "hsl(224, 23%, 55%)",
        "neutral-dark-blue": "hsl(223, 47%, 23%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
