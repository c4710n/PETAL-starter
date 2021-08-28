const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      '../lib/**/*.html.eex',
      '../lib/**/*.html.leex',
      '../lib/**/*.ex',
      '../lib/**/*.exs',
      './js/**/*.js',
    ],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains MonoVariable', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: colors.rose,
        neutral: colors.blueGray,
        info: colors.blue,
        success: colors.green,
        danger: colors.red,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
