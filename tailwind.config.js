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
        'spacegray-100': '#EAECF0',
        'spacegray-300': '#D0D5DD',
        'spacegray-200': '#667085',
        'spacegreen': '#027A48',
        'darkblue-100': '#394359',
        'darkblue-200': '#1D263A',
        'darkblue-300': '#171E2E',
        'darkblue-400': '#101828',
        'primary-100': '#D3F2EE',
        'primary-200': '#E9F9F6',
        'primary-300': '#ECFDF3',
        'primary-500': '#21BFA8',
        'primary-600': '#1A9986',
        'primary-700': '#147365',
        'primary-800': '#1F8A5D',
      }
    },
  },
  plugins: [],
}

