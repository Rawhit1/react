/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       dropShadow: {
        neon: '0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f',
      },
    },
  },
  plugins: [],
}

