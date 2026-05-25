import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183326',
          mid:     '#2A5240',
          light:   '#3D7A5E',
        },
        amber: {
          DEFAULT: '#C47B28',
          light:   '#E8A840',
          pale:    '#F5E9D0',
        },
        coral: {
          DEFAULT: '#D95F3C',
          pale:    '#FAEAE4',
        },
        cream:      '#F7F2EA',
        'warm-white': '#FDF9F3',
        ink:        '#1A1714',
        muted:      '#6B5F52',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        card:  '0 2px 18px rgba(0,0,0,0.06)',
        'card-hover': '0 14px 44px rgba(0,0,0,0.12)',
        widget: '0 8px 32px rgba(0,0,0,0.09)',
        hero:   '0 28px 60px rgba(0,0,0,0.28)',
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(155deg, rgba(24,51,38,.88) 0%, rgba(24,51,38,.5) 50%, rgba(197,123,40,.28) 100%)",
        'card-overlay':  'linear-gradient(to top, rgba(18,35,26,.85) 0%, rgba(0,0,0,.04) 55%)',
        'exp-overlay':   'linear-gradient(to top, rgba(18,38,28,.9) 0%, transparent 60%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease both',
        'fade-up-1': 'fadeUp 0.8s 0.1s ease both',
        'fade-up-2': 'fadeUp 0.8s 0.2s ease both',
        'fade-up-3': 'fadeUp 0.8s 0.3s ease both',
        'fade-up-4': 'fadeUp 0.8s 0.4s ease both',
        'scroll-pulse': 'scrollPulse 2s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
