/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',           // Главный файл index.html
    './public/pages/**/*.html',      // Все файлы .html в папке pages и её подкаталогах
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'btn-gradient':'linear-gradient(to right ,#16128B,#47E1DD)',
        'head-gradient':'radial-gradient(circle at 80% 350%, #47E1DD, #1612BB)',
        'gradient':'linear-gradient(90deg , #1612BB,#47E1DD 120%)',
        'gradient-reverse':'linear-gradient(90deg ,#47E1DD,#1612BB)',
      },
      colors:{
        bgGray:'#E8E8E8',
        colorGray:'#B7B7B7',
        colorBlack:'#292D32',
        colorBlue:'#47E1DD',
        colorGray2:'#6A6A6A',
        dark:'#1b1b1b'
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'], 
        houschka: ['Houschka Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

