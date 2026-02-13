/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        valentine: {
          blush: '#ffd6e0',
          rose: '#ff6b8a',
          berry: '#c9184a',
          wine: '#5a1f3d'
        },
        nemo: {
          orange: '#ff7f11',
          coral: '#f45d01',
          ocean: '#0a5ea8',
          foam: '#bde0fe'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive']
      },
      boxShadow: {
        soft: '0 15px 45px rgba(32, 14, 21, 0.2)'
      },
      animation: {
        'float-soft': 'floatSoft 6s ease-in-out infinite'
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-9px)' }
        }
      }
    }
  },
  plugins: []
};
