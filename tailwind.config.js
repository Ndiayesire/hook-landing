/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          dark: '#061840',
          light: '#0E3380',
        },
        secondary: {
          DEFAULT: '#7FB069',
          dark: '#6A9456',
          light: '#95C17D',
        },
        accent1: {
          DEFAULT: '#F77F00',
          dark: '#D66D00',
          light: '#FF9419',
        },
        accent2: {
          DEFAULT: '#4C6A65',
          dark: '#3b534f',
          light: '#5d7a75',
        },
        accent3: {
          DEFAULT: '#E8E9EB',
          dark: '#D4D5D8',
          light: '#F5F5F6',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399',
        },
        warning: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
          light: '#F87171',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Garet', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(10, 36, 99, 0.05)',
        'medium': '0 4px 20px rgba(10, 36, 99, 0.08)',
        'large': '0 10px 40px rgba(10, 36, 99, 0.12)',
        'sm': '0 1px 3px rgba(10, 36, 99, 0.04)',
        'card': '0 2px 8px rgba(10, 36, 99, 0.06)',
        'hover': '0 8px 24px rgba(10, 36, 99, 0.10)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-40px)' },
        },
      },
    },
  },
  plugins: [],
};