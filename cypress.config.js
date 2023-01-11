const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3budi4",
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
  },
  chromeWebSecurity: false,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/test-output.xml",
    toConsole: true,
  },
  viewportWidth: 1920,
  viewportHeight: 1200,
});
