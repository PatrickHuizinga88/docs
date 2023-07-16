/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        light: '#818cf8',
        lighter: '#a5b4fc',
        dark: '#4f46e5',
        darker: '#4338ca'
      }
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
  plugins: [],
}

