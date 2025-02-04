const constants = require("./constants");

module.exports.config = {
  directConnect: true,
  baseUrl: constants.BASE_URL,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--window-size=1024,768"]
    }
  },
  specs: ["*.spec.js"],
  // highlightDelay: 1000,
  onPrepare() {
    browser.waitForAngularEnabled(false);
    // afterEach(() => browser.sleep(1000));
  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    random: true
  },
  SELENIUM_PROMISE_MANAGER: false
};
