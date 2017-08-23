module.exports = function (config) {
    var testWebpackConfig = require('../config/webpack.test.js')();

    var configuration = {
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        client: {
            captureConsole: false
        },
        files: [
            { pattern: './spec-bundle.js', watched: false },
            { pattern: '../src/client/*', watched: false, included: false, served: true, nocache: false }
        ],
        preprocessors: { './spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },
        webpack: testWebpackConfig,
        coverageReporter: {
            type: 'in-memory'
        },
        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunks: false
            }
        },
        reporters: ['mocha', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        browsers: [
           'ChromeDebugging' //'Chrome'
        ],
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: [ '--remote-debugging-port=9333' ]
              },
            ChromeTravisCi: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        singleRun: true
    };

    if (process.env.TRAVIS) {
        configuration.browsers = [
            'ChromeTravisCi'
        ];
    }

    config.set(configuration);
};