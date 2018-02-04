'use strict';

describe('reddit homepage', function() {

  beforeAll(function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com');
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
});