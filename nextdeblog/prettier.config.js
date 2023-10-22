/** @type {import('prettier').Config} */
module.exports = {
  "semi": true,
  "printWidth": 90,
  "tabWidth": 2, // スペースの単位
  "trailingComma": "all",
  plugins: [require('prettier-plugin-tailwindcss')],
}
