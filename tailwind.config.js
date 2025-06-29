/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Serene Backwaters Theme (Portal Base)
        serene: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        backwater: {
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
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#9fb09f',
          400: '#7a8f7a',
          500: '#5d735d',
          600: '#485a48',
          700: '#3c4a3c',
          800: '#323d32',
          900: '#2b342b',
          950: '#161c16',
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
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'serene-gradient': 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 25%, #99f6e4 50%, #5eead4 75%, #2dd4bf 100%)',
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