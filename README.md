# SauceDemo Automation - CodeceptJS

Automation testing project for SauceDemo login feature using CodeceptJS with Playwright.

---

## Project Structure

saucedemo-codeceptjs-automation/
│
├── tests/
│ └── login_test.js
│
├── codecept.conf.js
├── package.json
└── README.md


---

## Prerequisites (Windows OS)

1. Install Node.js  
Download from: https://nodejs.org/

Verify installation:
node -v
npm -v


2. Install Git (optional, if cloning repository)  
Download from: https://git-scm.com/

---

## Install Dependencies

After cloning or downloading the project, open terminal inside the project folder and run:
npm install

If needed, install CodeceptJS and Playwright manually:

npm install codeceptjs playwright --save-dev

---

## Install Playwright Browser
Run:
npx playwright install

---

## Run Automation Test
Run the following command:
npx codeceptjs run --steps


---

## Generate Test Report (Optional)

Install mochawesome reporter:
npm install mochawesome --save-dev


Run with reporter:
npx codeceptjs run --reporter mochawesome


Test report will be generated inside the `output` folder.

---

## Test Scenarios Covered

1. Successful login with valid credentials  
   - Username: standard_user  
   - Password: secret_sauce  

2. Failed login with invalid credentials  
   - Invalid username or password  
   - Error message validation  

---

## Framework & Tools

- CodeceptJS
- Playwright
- Node.js
- JavaScript

## Approach

The automation script was created using CodeceptJS with Playwright. ID selectors were used for main interactive elements such as username, password, and login button, while class selectors were used for validation elements like titles and error messages. Explicit waits were added to ensure synchronization, preventing flakiness due to loading delays. The script assumes stable DOM elements, publicly accessible website, and available credentials. Each test scenario is independent and the tests run consistently on Windows with Node.js and Playwright configured.

