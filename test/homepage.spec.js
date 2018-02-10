'use strict';

var homePage = require('../page/home.page.js');

describe('reddit homepage', function() {

  beforeAll(function() {
    homePage.get();
  });

  it('should have 25 ranks', function() {
    expect(element.all(by.css('.rank')).count()).not.toBeLessThan(homePage.RANKS);
  });

  it('should have 25 upvote arrows', function() {
    expect(element.all(by.css('.arrow.up')).count()).not.toBeLessThan(homePage.UPVOTES);
  });

  it('should have 25 downvote arrows', function() {
    expect(element.all(by.css('.arrow.down')).count()).not.toBeLessThan(homePage.DOWNVOTES);
  });

  it('should have 25 post headers', function() {
    expect(element.all(by.css('a.title')).count()).not.toBeLessThan(homePage.HEADERS);
  });

  it('should show 18 links in the footer', function() {
    expect(element.all(by.css('div.footer-parent a')).count()).not.toBeLessThan(homePage.FOOTER_LINKS);
  });
});
