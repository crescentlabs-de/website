/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crescent-cyan': '#00E5CC',
        'crescent-dark': '#0A0A0F',
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'moon-glow': 'moon-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
