'use strict';

describe('subreddits page', function() {

  beforeAll(function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com/subreddits');
  });

  it('should list 25 subreddits to add', function() {
    expect(element.all(by.css('a.add')).count()).not.toBeLessThan(25);
  });

  it('should have 25 subreddit titles', function() {
    expect(element.all(by.css('a.title')).count()).not.toBeLessThan(25);
  });

  it('should have 25 subreddit short descriptions', function() {
    expect(element.all(by.css('div.usertext-body')).count()).not.toBeLessThan(25);
  });
});
