import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#07070c',
        panel: '#10122a',
        neon: '#5ce1ff',
        violet: '#8a6eff'
      },
      boxShadow: {
        glow: '0 0 30px rgba(92,225,255,0.25)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)'
      }
    }
  },
  plugins: []
} satisfies Config;
