import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html}'],

  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },

    fontFamily: {
      switzer: ['Switzer', 'sans-serif'],
      titan: ['Titan One', 'sans-serif']
    },

    colors: {
      primary: '#06C',

      gray: {
        100: '#363B42',
        200: '#2E2E2F'
      },

      white: '#FFF',
      black: '#060606',
      transparent: 'transparent'
    },

    extend: {}
  },

  plugins: []
}

export default config
