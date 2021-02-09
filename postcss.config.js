if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {},
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
    },
  };
}
