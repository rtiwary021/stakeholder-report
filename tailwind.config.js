/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FD5108",
        orange2: "#FE7C39",
        orange3: "#FFAA72",
        ink: "#000000",
        body: "#2B2B2B",
        muted: "#6E6E6E",
        card: "#F2F2F2",
        hairline: "#EBEBEB",
        grey4: "#A1A8B3",
        grey5: "#B5BCC4",
        grey6: "#CBD1D6",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        content: "1040px",
      },
    },
  },
  plugins: [],
};
