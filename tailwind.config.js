/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "320px": "320px"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        asafe: "#57babd",
        asafehover: "#3b817f80",
        bgheader: "#1c1813",
        primary: "#F5F5F5",
        secondary: "#C5DAB5",
        error: "#8b0000"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
