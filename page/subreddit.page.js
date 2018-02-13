'use strict';

var SubredditsPage = function() {
  var self = this;

  self.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/subreddits');
  };
};

module.exports = new SubredditsPage();
