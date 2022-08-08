/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1b1b1b",
        "secondary-dark": "#242424",
        "tertiary-dark": "#34373b",
        "contrasting-dark": "#268d61",
      },
      height: {
        "75v": "75vh",
        "90v": "90vh",
      },
    },
  },
  plugins: [],
};
