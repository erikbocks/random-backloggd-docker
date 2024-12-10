/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'radial-gradient(circle, #1c1c1c 0%, #1b1b1b 10%, #1a1a1a 20%, #181818 30%, #161616 40%, #141414 50%, #121212 60%, #101010 80%, #0e0e0e 90%, #0d0d0d 100%)',
      },
      backgroundColor: {
        'inputs-background': '#212121',
        'inputs-background-hover': '#262626',
        'popup': '#303030'
      },
      fontFamily: {
        'montserrat': 'Montserrat, ui-sans-serif'
      },
      keyframes: {
        zoomInAndOut: {
          '0%, 100%': { transform: 'scale(1.3)'},
          '50%': {transform: 'scale(1.8)'},
        }
      },
      animation: {
        zoomInAndOut: 'zoomInAndOut 2s ease-in-out infinite',
      },
      borderRadius: {
        "50": "50%"
      },
      width: {
        "loading-mobile": "192px",
        "loading-pc": "256px"
      },
      height: {
        "loading-mobile": "192px",
        "loading-pc": "256px"
      }
    },
  },
  plugins: [],
}

