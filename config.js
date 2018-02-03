'use strict';

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  specs: ['*.spec.js'],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'report'
      })
    );
  }
};
