/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'stadium': "url('./assets/img/field-bg.svg')",
        'card': "url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp')"
      }
    },
  },
  plugins: [],
}

