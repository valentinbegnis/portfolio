/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      sky: '#6dcbbf',
      star: '#f5f5ff',
      sun: '#fbd923',
      nebula: '#e16e2d',
      stardust: '#9a9592',
      bigbang: '#c52744',
      void: '#1a1a1a'
    }
  },
  plugins: []
}
