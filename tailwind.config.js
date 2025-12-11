/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        cream: '#EEDBBF',
        scarlet: '#ab3130',
        deepred: '#67191f',
        midnight: '#121212',
        golden: '#b47a21'
      },
      fontFamily: {
        "quicksand": ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],

        "cinzel-bold": ["Cinzel-Bold", "sans-serif"],
        "cinzel-medium": ["Cinzel-Medium", "sans-serif"],
        "cinzel": ["Cinzel-Regular", "sans-serif"],

        "great": ["GreatVibes", "sans-serif"],
      },
    },
  },
  plugins: [],
}

