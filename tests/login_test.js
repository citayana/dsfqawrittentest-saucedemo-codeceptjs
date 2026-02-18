Feature('Login Feature - SauceDemo');

Scenario('User successfully login with valid credential', async ({ I }) => {
  I.amOnPage('https://www.saucedemo.com/');

  I.fillField('#user-name', 'standard_user');
  I.fillField('#password', 'secret_sauce');
  I.click('#login-button');

  // Assertion: Verify redirect to inventory page
  I.waitForURL('/inventory.html', 5);
  I.seeInCurrentUrl('/inventory.html');

  // Assertion: Verify Products title visible
  I.see('Products', '.title');
});

Scenario('User fails to login with invalid credential', async ({ I }) => {
  I.amOnPage('https://www.saucedemo.com/');

  I.fillField('#user-name', 'invalid_user');
  I.fillField('#password', 'wrong_password');
  I.click('#login-button');

  // Assertion: Verify error message appears
  I.waitForElement('.error-message-container', 5);
  I.see('Username and password do not match', '.error-message-container');
});
