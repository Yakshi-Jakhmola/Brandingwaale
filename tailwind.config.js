/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OutFit: ['"Nunito"', 'sans-serif'],
        CurSive: ['"Cedarville Cursive"', 'cursive']
      },
      colors: {
        'yellow': '#ffda00b5',
        'lightyellow': '#ffda0030',
        'black': '#0e0505',
        'lightblack': '#414141',
        'white': '#fff',
      },
      backgroundImage: {
        'gradientprimary': 'linear-gradient(to left bottom, #ffe54a, #ffea70, #ffef91, #fff4b0, #fff8cf);',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

