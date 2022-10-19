// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}", './node_modules/tw-elements/dist/js/**/*.js'
//   ],
//   theme: {
//     extend: {},
//   },
//   // plugins: [],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}