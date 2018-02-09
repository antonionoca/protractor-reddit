'use strict';

var HomePage = function() {
  var self = this;

  self.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/r/all');
  };
};

module.exports = new HomePage();
