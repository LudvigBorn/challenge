/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        secodary: {
          100: "#F7FAFC",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
        },
        main: {
          700: "#6B46C1",
        },
      },
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
};
