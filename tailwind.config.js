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
        "contrasting-dark": "#227e62",
        "font-dark": "#7b7b7b",
        "secondary-font-dark": "#a9a9a9",
      },
      height: {
        "75v": "75vh",
        "90v": "90vh",
      },
    },
  },
  plugins: [],
};
