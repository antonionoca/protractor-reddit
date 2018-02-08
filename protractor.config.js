'use strict';

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  specs: ['./test/*.spec.js'],

  multiCapabilities: [{
		browserName: 'chrome',
		chromeOptions: {
		  args: ['--headless', '--disable-gpu', '--window-size=800,600', '--incognito']
		}
	  },{
		browserName: 'chrome',
		chromeOptions: {
		  args: ['--headless', '--disable-gpu', '--window-size=320,480', '--incognito']
		}
	  }
  ],

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'report'
      })
    );
  }
};
