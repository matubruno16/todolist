/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'JosefinSans': "'Josefin Sans',sans-serif"
      },
      backgroundImage: {
        'bg-desktop-dark': "url('/src/assets/images/bg-desktop-dark.webp')",
        'bg-desktop-ligth': "url('/src/assets/images/bg-desktop-light.webp')",
        'bg-mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'bg-mobile-ligt': "url('/src/assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
}