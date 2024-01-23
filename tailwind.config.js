/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "sans-serif"]
      },
    },
  },
  variants: {
    // https://stackoverflow.com/questions/60917112/displaying-button-when-hovering-over-div-in-tailwindcss
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
}

