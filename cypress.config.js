const { defineConfig } = require("cypress");

module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    overwrite: false,
    html: true,
    json: true
    },
  e2e: {
    baseUrl:'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  
});
