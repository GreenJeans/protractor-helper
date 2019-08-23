require('./src/matchers')
module.exports = {
  clickWhenClickable: require("./src/clickersAndTappers").clickWhenClickable,
  click: require("./src/clickersAndTappers").click,
  tapWhenTappable: require("./src/clickersAndTappers").tapWhenTappable,
  tap: require("./src/clickersAndTappers").tap,
  fillFieldWithTextWhenVisible: require("./src/inputFieldInteractions").fillFieldWithTextWhenVisible,
  fillFieldWithText: require("./src/inputFieldInteractions").fillFieldWithText,
  fillInputFieldWithFileWhenPresent: require("./src/inputFieldInteractions").fillInputFieldWithFileWhenPresent,
  uploadFileIntoInputField: require("./src/inputFieldInteractions").uploadFileIntoInputField,
  clearFieldWhenVisible: require("./src/inputFieldInteractions").clearFieldWhenVisible,
  clear: require("./src/inputFieldInteractions").clear,
  clearFieldWhenVisibleAndFillItWithText: require("./src/inputFieldInteractions")
    .clearFieldWhenVisibleAndFillItWithText,
  clearFieldAndFillItWithText: require("./src/inputFieldInteractions").clearFieldAndFillItWithText,
  fillFieldWithTextWhenVisibleAndPressEnter: require("./src/inputFieldInteractions")
    .fillFieldWithTextWhenVisibleAndPressEnter,
  fillFieldWithTextAndPressEnter: require("./src/inputFieldInteractions").fillFieldWithTextAndPressEnter,
  getBodyElementFromCurrentBrowserOrBrowserInstance: require("./src/misc")
    .getBodyElementFromCurrentBrowserOrBrowserInstance,
  openNewBrowserInTheSamePage: require("./src/misc").openNewBrowserInTheSamePage,
  isCurrentUrlDifferentFromBaseUrl: require("./src/misc").isCurrentUrlDifferentFromBaseUrl,
  scrollToElementWhenVisible: require("./src/misc").scrollToElementWhenVisible,
  scrollToElement: require("./src/misc").scrollToElement,
  setTimeout: require("./src/misc").setTimeout,
  waitForElementPresence: require("./src/waiters").waitForElementPresence,
  waitForElementNotToBePresent: require("./src/waiters").waitForElementNotToBePresent,
  waitForElementVisibility: require("./src/waiters").waitForElementVisibility,
  waitForElementNotToBeVisible: require("./src/waiters").waitForElementNotToBeVisible,
  waitForTextToBePresentInElement: require("./src/waiters").waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement: require("./src/waiters").waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl: require("./src/waiters").waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl: require("./src/waiters").waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString: require("./src/waiters").waitForUrlToContainString,
  waitForUrlNotToContainString: require("./src/waiters").waitForUrlNotToContainString
};
