/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        iphoneX: "414px"
      },
      backgroundColor: {
        darkblue: "#00bcbb",
      },
      colors: {
        headcolor: "#015b71"
      }
    },
  },
  plugins: [],
}

