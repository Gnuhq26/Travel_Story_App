/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      // Colors used in the project
      colors: {
        primary: "#05B6D3",
        secondary: "#EF863E",
      },
      backgroundImage: {
        'login-bg-img': "url('./public/bg-login-image.jpg')",
        'signup-bg-img': "url('./public/signup-bg-image.jpg')",
      }
    },
  },
  plugins: [],
}

