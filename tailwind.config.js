module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./{components,hoc,pages}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'raleway': ['raleway', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
