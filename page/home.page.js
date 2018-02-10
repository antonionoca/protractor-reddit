'use strict';

var HomePage = function() {
  var self = this;

  self.RANKS = self.UPVOTES = self.DOWNVOTES = self.HEADERS = 25;
  self.FOOTER_LINKS = 18;

  self.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/r/all');
  };
};

module.exports = new HomePage();
