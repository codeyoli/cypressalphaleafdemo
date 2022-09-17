const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-grep/src/plugin")(config);
      return config;
    },

    baseUrl: "https://trello.com",

    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    trashAssetsBeforeRuns: true,
    video: false,

    viewportHeight: 1080,
    viewportWidth: 1920,

    retries: {
      runMode: 0,
      openMode: 0, // additional one trial after intial failure
    },

    // reporter
  },
  reporter: "mochawesome",
});
