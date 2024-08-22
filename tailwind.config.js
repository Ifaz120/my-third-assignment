/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'neo-gray': '#494949',
        },
      },
    },
    plugins: [],
  }
//   module.exports = {
//     //...
//     plugins: [
//       require('daisyui'),
//     ],
//   }