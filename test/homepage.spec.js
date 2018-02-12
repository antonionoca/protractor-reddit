'use strict';

var homePage = require('../page/home.page.js');

describe('reddit homepage', function() {

  beforeAll(function() {
    homePage.getAll();
  });

  it('should have 25 ranks', function() {
    expect(homePage.ranks.count()).not.toBeLessThan(homePage.RANKS);
  });

  it('should have 25 upvote arrows', function() {
    expect(homePage.upvotes.count()).not.toBeLessThan(homePage.UPVOTES);
  });

  it('should have 25 downvote arrows', function() {
    expect(homePage.downvotes.count()).not.toBeLessThan(homePage.DOWNVOTES);
  });

  it('should have 25 post headers', function() {
    expect(homePage.headers.count()).not.toBeLessThan(homePage.HEADERS);
  });

  it('should show 18 links in the footer', function() {
    expect(homePage.footerLinks.count()).not.toBeLessThan(homePage.FOOTER_LINKS);
  });
});
