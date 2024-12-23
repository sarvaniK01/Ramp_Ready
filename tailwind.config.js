/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'ms': '320px' ,
      
      'mm': '375px' ,
      
      'ml': '425px' ,

      'md': '768px',

      'lg': '1024px',

      'xl': '1440px',

      '2xl': '2560px',
    },
    extend: {
      fontFamily: {
        'Playfair': ['Playfair', 'serif'],
        'Courier': ['Courier Prime', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000',
        'beige': '#BAA68C',
        'blue': '#95A7B4',
        'grey': '#B8B9B8',
        'red': 'rgb(230,0,0)'
      },
    },
  },
  plugins: [],
}
