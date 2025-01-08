/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      'lightGray': '#EBEBEB',
      'mintGreen': '#E7FFE9',
      'fluorescentGreen': '#A1FFC7',
      'deepFluorescentGreen': '#81F8B1'
    }
  },
  plugins: [],
}

