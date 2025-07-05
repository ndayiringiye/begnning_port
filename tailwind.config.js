// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS is very important
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FFD700'
        },
        dark: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D'
        },
        light: '#FAFAFA',
        secondary: '#333333' // add this if you're using it
      }
    }
  },
  darkMode: 'class', // required for dark mode toggle
  plugins: [],
};
