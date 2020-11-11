module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
    options: {
      whitelistPatterns: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        cyanvivid: {
          100: '#C2FEF6',
          200: '#93FDF2',
          300: '#61F4EB',
          400: '#3CE7E1',
          500: '#1FD4D4',
          600: '#10B5BA',
          700: '#069AA4',
          800: '#06818F',
          900: '#05606E',
        },
      },
      fontFamily: {
        montserrat: 'Montserrat',
        catamaran: 'Catamaran',
        raleway: 'Raleway',
        hindsiliguri: 'Hind Siliguri',
        librefranklin: 'Libre Franklin',
        asap: 'Asap',
        nunito: 'Nunito',
        ebgaramond: 'EB Garamond',
        inter: 'Inter',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
