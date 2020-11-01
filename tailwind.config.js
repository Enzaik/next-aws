module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
    whitelistPatterns: [/^bg-/, /^text-/],
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
