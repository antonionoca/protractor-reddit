'use strict';

exports.config = {

  specs: ['todo-spec.js'],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  }
};
