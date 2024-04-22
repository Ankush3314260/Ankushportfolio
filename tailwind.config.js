/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
          earthimage:"url('https://res.cloudinary.com/dfntazqum/image/upload/v1713762459/nhdjkwsws7osyil9sj2j.jpg')",
          starimage:"url('Picsart_24-04-16_17-53-02-893.jpg')",
          whiteimage:"url('cosmos-1853491.jpg')",
          star:"url('star.jpg')"
      },
      colors: {
        newP:"#E5E4E2",
        new111:"#050507",
        new100: "#d9f0f3",
        new1:"#161618",
        new2:"#212124",
        new3:"#818181",
        newf1:"#f1f1f1",
        new29:"#29b2e",
        new05:"#050507",
        new22:"#222222",
        newDD:"#DDDDDD",
        newFF:"#FFA500",
        new4CA:"#4CAF50",
        new1A:"#1A1A1A",
        new20:"#202020",
        
       
      },
//
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
