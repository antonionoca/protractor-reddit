'use strict';

var subredditsPage = require('../page/subreddit.page.js');

describe('subreddits page', function() {

  beforeAll(function() {
    subredditsPage.get();
  });

  it('should list 25 subreddits to add', function() {
    expect(element.all(by.css('a.add')).count()).not.toBeLessThan(subredditsPage.SUBREDDITS);
  });

  it('should have 25 subreddit titles', function() {
    expect(element.all(by.css('a.title')).count()).not.toBeLessThan(subredditsPage.SUBREDDITS);
  });

  it('should have 25 subreddit short descriptions', function() {
    expect(element.all(by.css('div.usertext-body')).count()).not.toBeLessThan(subredditsPage.SUBREDDITS);
  });
});
