/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'cosmic-latte': '#FFF7EB',
      'tea-green': '#BDD8A3',
      'cinerous': '#9B8882',
      'black-olive': '#403D39',
      'goldenrod': '#D9AA1C',
      'black': '#000000',
      'white': '#ffffff',
    },
    fontFamily: {
      'fell': ['IM Fell English', 'serif'],
      'zen': ['Zen Kaku Gothic New', 'sans-serif'],
      'pirata': ['Pirata One', 'cursive'],
      'bokor': ['"Bokor"', 'cursive'],
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
