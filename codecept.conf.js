exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'saucedemo-codeceptjs'
};
