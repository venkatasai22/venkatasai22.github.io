/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a0f1e',
        'secondary-dark': '#1e293b',
        'text-light': '#f8fafc',
        'accent-teal': '#22d3ee',
        'accent-indigo': '#6366f1',
        'muted': '#64748b',
        'success-green': '#10b981',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '1.1' }],
        'heading-lg': ['3rem', { lineHeight: '1.2' }],
        'heading-md': ['1.875rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6366f1 0%, #0a0f1e 100%)',
      },
    },
  },
  plugins: [],
};
