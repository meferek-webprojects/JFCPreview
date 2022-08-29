/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    formats: ['image/webp'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'overlay': '#273640',
      'grey': {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      'red': '#ec4b4b',
      'orange': '#ff9e0f',
      'green': '#4ad60a',
      'blue': {
        100: '#edf7f9',
        300: '#3c8fc9',
        500: '#0076c9',
        700: '#00497c',
        900: '#00254a',
      },
    },
    extend: {
      fontFamily: {
        prometo: ["Prometo", "sans-serif"],
        prometobold: ["Prometo-Bold", "sans-serif"],
        proxima: ["Proxima", "sans-serif"],
        proximabold: ["Proxima-Bold", "sans-serif"],
        brands: ["Brands", "sans-serif"],
        solid: ["Solid", "sans-serif"],
      },
      rotate: {
        '315': '315deg',
        '360': '360deg',
      },
    },
    screens: {
      'xs': '448px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
