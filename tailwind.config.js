/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'poppin': 'Poppins',
        'urbanist': 'Urbanist',
        'playfair': 'Playfair Display'
      },
      colors: {
        'dark': '#161616',
        'success': '#11C559',
        'secondary': '#D9D9D9',
        'blue': '#8FC0EC',
        'pink': '#EFB4C1',
        'danger': '#E62222',
      },
      backgroundImage: {
        'curve': 'url(./assets/curve.svg)',
        'nav-right': 'url(./assets/nav-right.svg)',
        'live-casino': 'url(./assets/live-casino.png)',
        'live-casino-bg': 'linear-gradient(90deg, #0C1F01 0%, #0C1F01 48.1%, #112A03 100%)',
        'slot-machine-bg': 'linear-gradient(90deg, #0C1F01 0%, #0C1F01 48.1%, #112A03 100%)',
        'content': 'linear-gradient(90deg, #132119 0%, #101112 101.77%)',
        'success-gradient-border': 'linear-gradient(180deg, #52CB75 0%, #50FF96 100%)',
        'success-gradient-bg': 'linear-gradient(180deg, #55CC71 0%, #30BCA0 100%)',
        'success-gradient-match-border': 'linear-gradient(63.17deg, #11C559 0.83%, #000000 45.64%, #11C559 100%)',
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      boxShadow: {
        'bubble': '0px 8px 0px rgba(17, 197, 89, 0.4)',
        'btn': '0px 4px 4px #49F88F',
        'footer-card': '0px 10px 30px rgba(3, 0, 49, 0.5)',
        'bar': '0px 0px 10px rgba(17, 197, 89, 0.4)',
        'play-card': '0px 5.93182px 11.8636px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'btn': '0px 4px 4px #49F88F',
        'blue': '0px 4px 4px #8FC0EC',
        'pink': '0px 4px 4px #EFB4C1',
      },
      keyframes: {
        'alarm': {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        'alarm': 'alarm 40s linear infinite'
      }
    },
  },
  plugins: [],
}

