/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'bs' : '1650px'
    // },
    extend: {
      colors: {
        'primary' : '#31517D',
        'secondary' : '#A1ADFB',
        'tertiary' : '#437E87',
        't1' : '#f12e00',
        't2' : '#ffce25',
        't3' : '#0500ad'
      }
    },
  },
  plugins: [],
}
