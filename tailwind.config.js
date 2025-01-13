/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Myfont", "sans-serif"],
        custom2: ["Myfont2", "sans-serif"],
        custom3: ["Myfont3", "sans-serif"],
        university: ["university", "sans-serif"],
        copyright: ["copyright", "sans-serif"],
        btheone: ["btheone", "sans-serif"],
        newname: ["name", "snans-serif"],
        Boldone: ["Boldone", "snans-serif"],
        custom4: ["custom4", "snans-serif"],
        custom5: ["custom5", "snans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
