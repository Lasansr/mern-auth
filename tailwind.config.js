/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       colors: {
      cream: '#f5f0e6',
      deepGreen: '#2f5d50',
      gold: '#b48b5b',
      darkGreen: '#204030',
    },
    },
  },
  plugins: [require('flowbite/plugin'), 
  require('tailwind-scrollbar'),
  ]

}