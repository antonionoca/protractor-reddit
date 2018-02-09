'use strict';

var homePage = require('../page/home.page.js');

describe('reddit homepage', function() {

  beforeAll(function() {
    homePage.get();
  });

  it('should have 25 ranks', function() {
    expect(element.all(by.css('.rank')).count()).not.toBeLessThan(25);
  });

  it('should have 25 upvote arrows', function() {
    expect(element.all(by.css('.arrow.up')).count()).not.toBeLessThan(25);
  });

  it('should have 25 downvote arrows', function() {
    expect(element.all(by.css('.arrow.down')).count()).not.toBeLessThan(25);
  });

  it('should have 25 titles', function() {
    expect(element.all(by.css('a.title')).count()).not.toBeLessThan(25);
  });

  it('should show 18 links in the footer', function() {
    expect(element.all(by.css('div.footer-parent a')).count()).not.toBeLessThan(18);
  });
});
