const defaultTimeoutInMs = require("./constants_and_utils/constants").DEFAULT_TIMEOUT_IN_MS;
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const getBodyElementFromCurrentBrowserOrBrowserInstance = async function(browserInstance) {
  const cssSelector = "body";

  utils.obsoleteFunction("getBodyElementFromCurrentBrowserOrBrowserInstance");
  if (browserInstance) {
    return await browserInstance.element(by.css(cssSelector));
  }
  return await browser.element(by.css(cssSelector));
};

const openNewBrowserInTheSamePage = async function(browser = requiredParam(openNewBrowserInTheSamePage, "browser")) {
  utils.obsoleteFunction("openNewBrowserInTheSamePage");
  return await browser.forkNewDriverInstance(true);
};

const isCurrentUrlDifferentFromBaseUrl = async function() {
  let url = await browser.getCurrentUrl();
  return (url !== await browser.baseUrl);
};

const scrollToElementWhenVisible = async function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("scrollToElementWhenVisible", "scrollToElement");
  await this.scrollToElement(htmlElement, timeoutInMilliseconds);
};

const scrollToElement = async function(
  htmlElement = utils.requiredParam(scrollToElement),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  await browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(timeoutInMilliseconds = defaultTimeoutInMs) {
  utils.timeout.timeoutInMilliseconds = timeoutInMilliseconds;
};

module.exports = {
  getBodyElementFromCurrentBrowserOrBrowserInstance,
  openNewBrowserInTheSamePage,
  isCurrentUrlDifferentFromBaseUrl,
  scrollToElementWhenVisible,
  scrollToElement,
  setTimeout
};
