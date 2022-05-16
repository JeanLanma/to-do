module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-ok':'#429DF5', 
        'red-danger':'#F5635B', 
        'yellow-alert':'#E4F52A', 
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
