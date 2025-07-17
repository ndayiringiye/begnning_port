// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FFD700',
          600: '#e6c200',
        },
        dark: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
        },
        light: {
          100: '#15a8a8ff',
          200: '#15c08dff',
        },
        secondary: {
          500: '#333333',
          600: '#222222',
        },
      },
    },
  },
  plugins: [],
};
