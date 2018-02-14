'use strict';

var SubredditsPage = function() {
  var self = this;

  self.SUBREDDITS = 25;

  self.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/subreddits');
  };
};

module.exports = new SubredditsPage();
