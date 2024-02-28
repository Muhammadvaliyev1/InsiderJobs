/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': '["Poppins"]',
        'Inter': '["Inter"]',
        'NotoSans': '["Noto Sans"]',
      },
      maxWidth: {
        'base': '1300px'
      },
      borderRadius: {
        '2.5xl': '20px'
      },
      padding: {
        '7.5':'30.5px',
      },
      colors: {
        'darkblue-100': '#394359',
        'darkblue-200': '#1D263A',
        'darkblue-300': '#171E2E',
        'primary-100': '#D3F2EE',
        'primary-500': '#21BFA8',
        'primary-600': '#1A9986',
        'primary-700': '#147365',
      }
    },
  },
  plugins: [],
}

