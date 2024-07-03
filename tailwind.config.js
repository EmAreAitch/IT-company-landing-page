/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta-bold': [
          'PlusJakartaSans-Bold', 
          'sans-serif'
        ],
        'jakarta-regular': [
          'PlusJakartaSans-Regular', 
          'sans-serif'
        ],
        'jakarta-semi-bold': [
          'PlusJakartaSans-SemiBold', 
          'sans-serif'
        ],
      },
      colors: {
        navy: '#172740',
        'broken-white': '#f8f9fa',
        'darker-green': '#40DA96'
      }
    },
  },
  plugins: [],
}
