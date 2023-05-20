const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {

      colors: {
        background: "#ffffff",
        primary: {
          light: "#ffff7f",
          medium: "#ffff66",
          DEFAULT: "#ffe74c",
          dark: "#ccb419"
        },
        secondary: {
          light: "#ffd38b",
          medium: "#ffba72",
          DEFAULT: "#ffa058",
          dark: "#cc6d25"
        },
        danger: "#ff5964",
        graphics: "#f7aab2",
        blue: {
          light: "#35a7ff",
          DEFAULT: "#3784c6",
          dark: "#38618c"
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Cinzel', 'sans-serif'],
        display: ['Cinzel', ...defaultTheme.fontFamily.sans],
        heading: ['Cinzel', 'serif']
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
