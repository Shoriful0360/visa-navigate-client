/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner_1: "url('https://5.imimg.com/data5/FV/TL/QS/SELLER-70615525/visitor-visa-services-500x500.png')",
       banner_2: "url('https://www.indiatravel.app/wp-content/uploads/2024/03/how-to-apply-for-singapore-tourist-visa.jpg')",
       banner_3: "url('https://themigration.com.au/wp-content/uploads/2024/07/tourist-vissa-in-australia-feature-image.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}