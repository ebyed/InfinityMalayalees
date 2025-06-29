/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Golden Harvest Theme (Portal Base)
        golden: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        harvest: {
          50: '#fefdf8',
          100: '#fefbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        amber: {
          50: '#fffbf0',
          100: '#fef7e0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
          950: '#42180a',
        },
        
        // Tropical Bloom Theme (Onam Sections)
        tropical: {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fbd7a8',
          300: '#f8b871',
          400: '#f59338',
          500: '#f37316',
          600: '#e4570c',
          700: '#bd420c',
          800: '#973512',
          900: '#7c2d12',
          950: '#431407',
        },
        bloom: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
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
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'dance': 'dance 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        dance: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)' },
          '75%': { transform: 'translateY(-3px) rotate(-1deg)' },
        },
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'golden-gradient': 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 25%, #fde68a 50%, #fcd34d 75%, #fbbf24 100%)',
        'harvest-gradient': 'linear-gradient(135deg, #fefdf8 0%, #fefbeb 25%, #fef3c7 50%, #fde68a 75%, #facc15 100%)',
        'tropical-gradient': 'linear-gradient(135deg, #fef7ed 0%, #fdedd4 25%, #fbd7a8 50%, #f8b871 75%, #f59338 100%)',
        'bloom-gradient': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #f472b6 100%)',
      },
      fontFamily: {
        'malayalam': ['Noto Sans Malayalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
};