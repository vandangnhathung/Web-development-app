/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 20px 0 rgba(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
