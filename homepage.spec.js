'use strict';

describe('reddit homepage', function() {

  it('should load the page and list 25 ranks', function() {

    browser.waitForAngularEnabled(false);
    browser.get('https://reddit.com');

    expect(element.all(by.css('.rank')).count()).not.toBeLessThan(25);
  });

});
