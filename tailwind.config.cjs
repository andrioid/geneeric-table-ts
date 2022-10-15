/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["sm:table-cell", "md:table-cell", "lg:table-cell"],
  theme: {
    extend: {},
  },
  plugins: [],
};
