/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { forest: '#173f35', mint: '#dce9df', paper: '#f7f8f4', ink: '#17231f' },
    boxShadow: { soft: '0 18px 60px rgba(23, 63, 53, .09)' }
  }},
  plugins: []
}