/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hack-black': '#000000',
        'hack-navy': '#0a0a1f',
        'hack-deep': '#050510',
        'cyber-blue': {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#1cabf2',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'neon-blue': '#00d9ff',
        'electric-cyan': '#00fff7',
        'matrix-green': '#00ff41',
        'alert-red': '#ff0055',
        'warning-orange': '#ff6b35',
        'white': '#ffffff',
        'gray': '#a0aec0',
        'glass-white': 'rgba(255,255,255,0.05)',
        'glass-border': 'rgba(28,171,242,0.2)',
        'glass-glow': 'rgba(28,171,242,0.4)',
        'border': 'rgba(28,171,242,0.2)', // Added for border-border support
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'matrix': ['Courier New', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'decrypt': 'decrypt 0.8s ease-out forwards',
        'beam-float': 'beam-float 3s ease-in-out infinite',
        'spark': 'spark 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(28, 171, 242, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(28, 171, 242, 0.8)',
          },
        },
        'decrypt': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'beam-float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(2deg)',
          },
        },
        'spark': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
