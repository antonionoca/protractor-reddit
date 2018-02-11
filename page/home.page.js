'use strict';

var HomePage = function() {
  var self = this;

  self.RANKS = self.UPVOTES = self.DOWNVOTES = self.HEADERS = 25;
  self.FOOTER_LINKS = 18;

  self.ranks = element.all(by.css('.rank'));
  self.upvotes = element.all(by.css('.arrow.up'));
  self.downvotes = element.all(by.css('.arrow.down'));
  self.headers = element.all(by.css('a.title'));
  self.footerLinks = element.all(by.css('div.footer-parent a'));

  self.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/r/all');
  };
};

module.exports = new HomePage();
