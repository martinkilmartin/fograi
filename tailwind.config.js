import { nextui } from '@nextui-org/react';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
  plugins: [typography, nextui()],
};

export default config;
