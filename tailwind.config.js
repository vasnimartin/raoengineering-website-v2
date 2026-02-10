/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Muted Deep Blue
        surface: '#FAFAFA', // White-on-White Surface
        border: '#E5E7EB',
      },
      spacing: {
        section: '4rem', // 64px
      },
    },
  },
  plugins: [],
}
