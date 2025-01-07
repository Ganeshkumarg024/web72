/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2563eb, #1d4ed8)', // Example gradient
      },
      colors: {
        primary: 'var(--primary)',  // Adding the custom CSS variable
      },
    },
  },
  plugins: [],
}