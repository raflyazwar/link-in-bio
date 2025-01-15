/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-slow': 'gradient 15s linear infinite',
        'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid': 'grid 20s linear infinite',
        'dots': 'dots 20s linear infinite',
        'blob': 'blob 7s infinite',
        'glow-line': 'glow-line 3s ease-in-out infinite',
        'snow': 'snow 10s linear infinite',
        'aurora': 'aurora 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        dots: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'glow-line': {
          '0%': {
            opacity: 0,
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(100%)',
          },
        },
        snow: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
        aurora: {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(0) scale(1)',
            opacity: 0.8,
          },
          '50%': {
            transform: 'translateX(0%) translateY(-20px) scale(1.2)',
            opacity: 0.4,
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};