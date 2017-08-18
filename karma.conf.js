var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [{
            pattern: './src/**/*.spec.js',
            watched: true
        }],
        exclude: [],
        preprocessors: {
            "./src/**/*.spec.js": ["webpack"]
        },
        // webpack configuration
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "errors-only"
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Nightmare'],

        plugins: [
            'karma-nightmare',
            'karma-webpack',
            'karma-jasmine'
        ],

        // you can define custom flags
        nightmareOptions: {
            width: 800,
            height: 600,
            show: false
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity
    });
};