/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        muted: '#6b6b6b',
        rule: '#d4d0c8',
        accent: '#8b2a2a',
        paper: '#faf8f3',
        codebg: '#efece5',
        wash: '#eeeae2',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
      letterSpacing: {
        brand: '0.25em',
      },
    },
  },
  plugins: [],
};
