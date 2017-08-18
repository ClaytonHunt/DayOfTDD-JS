module.exports = function(config) {
  config.set({
    files: [
      {pattern: './src/*.spec.js', watched: false},
      {pattern: './src/**/*.spec.js', watched: false}
    ],

    preprocessors: {
      // add webpack as preprocessor
      './src/*.spec.js': ['webpack'],
      './src/**/*.spec.js': ['webpack']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
