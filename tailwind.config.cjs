/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      minWidth: theme => ({
        40: theme('spacing[40]')
      })
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
