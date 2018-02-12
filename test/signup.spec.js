'use strict';

var homePage = require('../page/home.page.js');

describe('homepage signup modal', function() {

  beforeAll(function() {
    homePage.get();
  });

  it('should show signup modal on login-required click', function(done) {
    var loginRequiredAnchors = element.all(by.css('a.login-required'));

    expect(loginRequiredAnchors.count()).not.toBeLessThan(4);

    loginRequiredAnchors.get(2).click();

    var until = protractor.ExpectedConditions;
    browser.wait(until.visibilityOf(element(by.id('desktop-onboarding-browse'))), 3000, 'Element is not visible')
    .then(function() {
      expect(element(by.id('desktop-onboarding-email')).isDisplayed()).toBeTruthy();

      done();
    });
  });

});
