/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        //=>@media (min-width:640){....}
        md: "768px",
        //=>@media (min-width:786){....}

        lg: "1024px",
        //=>@media (min-width:1024){....}

        xl: "1280px",
        //=>@media (min-width:1280){....}

        "2xl": "1536px",
        //=>@media (min-width:1536){....}
      },
    },
  },
  plugins: [],
};
