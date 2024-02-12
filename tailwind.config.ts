import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        loading: {
          '0%': { height: '100%' },
          '25%': { height: '75%' },
          '50%': { height: '50%' },
          '75%': { height: '25%' },
          '100%': { height: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        loading: 'loading 1s steps(10, end) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
