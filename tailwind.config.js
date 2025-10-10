module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2000px',
        '6xl': '2200px',
        '7xl': '2400px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
