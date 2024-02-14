/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        new1: "#E1F0DA",
        new2: "#99BC85",
        new3: "#3D5656",
        new4: "#AAD7D9",
        new5: "#836FFF",
        new6: "#A6F6FF",
        new7: "#DC84F3",
        new8: "#F3CCF3",
        new9: "#c4fff9",
        new10: "#07beb8",
        new11: "#9EC8B9",
        new12: "#1B4242",
        new13: "#436850",
        new14: "#967556",
        new15: "#27374D",
        new16: "#526D82",
        new17: "#9DB2BF",
      },

      boxShadow: {
        custom:
          " 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 100px cyan, 0 0 200px cyan",
        sh1: " 0 0 5px #FFFF00, 0 0 25px #FFFF00, 0 0 50px #FFFF00, 0 0 100px #FFFF00, 0 0 200px #FFFF00",
        sh2: " 0 0 5px #AC6CC8, 0 0 25px #AC6CC8, 0 0 50px #AC6CC8, 0 0 100px #AC6CC8, 0 0 200px #AC6CC8",
        sh3: " 0 0 5px #D5EAD5, 0 0 25px #D5EAD5, 0 0 50px #D5EAD5, 0 0 100px #D5EAD5, 0 0 200px #D5EAD5",
        sh21: " 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white",
      },
    },
  },

  plugins: [],
};
