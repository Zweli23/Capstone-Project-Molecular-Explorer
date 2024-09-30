const { defineConfig } = require("cypress");

module.exports = defineConfig({
  taskTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
