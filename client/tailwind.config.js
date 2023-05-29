/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
/*   mode: "jit", */
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        'dark_primary': "#5c5f7c",
        'dark_second': "#40667d",
        'dark_third': "#3d5c71",
        'dark_text': "text-white",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
// #5c5f7c
// #404472
// #191c40