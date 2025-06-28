/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors for Onam
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#f59e0b',
        },
        // Traditional Kerala colors
        cream: {
          100: '#fefcf0',
          200: '#fef7e0',
          300: '#fef2d0',
        },
        brown: {
          400: '#a16207',
          500: '#92400e',
          600: '#78350f',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};