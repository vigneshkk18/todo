/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgSmall': "url('/bg-small.jpg')",
        'bgLarge': "url('/bg-large.jpg')",
      }
    },
  },
  plugins: [],
}

