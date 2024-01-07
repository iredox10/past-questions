/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E4FFE3;",
        "secondary-color": "#00FFD1",
        "tertiary-color": "#19621C",
        "red-color": "#E31818",
        "black-color": "#000000",
        "white-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
