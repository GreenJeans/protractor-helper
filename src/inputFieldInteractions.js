const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const fillFieldWithTextWhenVisible = async function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("fillFieldWithTextWhenVisible", "fillFieldWithText");
  await this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithText = async function(
  htmlElement = utils.requiredParam(fillFieldWithText),
  text = utils.requiredParam(fillFieldWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  await htmlElement.sendKeys(text);
};

const fillInputFieldWithFileWhenPresent = async function(
  htmlElement = utils.requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = utils.requiredParam(fillInputFieldWithFileWhenPresent, "absolutePath"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("fillInputFieldWithFileWhenPresent", "uploadFileIntoInputField");
  await this.uploadFileIntoInputField(htmlElement, absolutePath, timeoutInMilliseconds);
};

const uploadFileIntoInputField = async function(
  htmlElement = utils.requiredParam(uploadFileIntoInputField),
  absolutePath = utils.requiredParam(uploadFileIntoInputField, "absolutePath"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement);

  await waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  await htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = async function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("clearFieldWhenVisible", "clear");
  await this.clear(htmlElement, timeoutInMilliseconds);
};

const clear = async function(
  htmlElement = utils.requiredParam(clear),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  await htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = async function(
  htmlElement = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await utils.replaceObsoleteFunction("clearFieldWhenVisibleAndFillItWithText", "clearFieldAndFillItWithText");
  await this.clearFieldAndFillItWithText(htmlElement, text, timeoutInMilliseconds);
};

const clearFieldAndFillItWithText = async function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await this.clear(htmlElement, timeoutInMilliseconds);
  await this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextWhenVisibleAndPressEnter = async function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("fillFieldWithTextWhenVisibleAndPressEnter", "fillFieldWithTextAndPressEnter");
  await this.fillFieldWithTextAndPressEnter(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextAndPressEnter = async function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  await this.fillFieldWithText(htmlElement, text + protractor.Key.ENTER, timeoutInMilliseconds);
};

module.exports = {
  fillFieldWithTextWhenVisible,
  fillFieldWithText,
  fillInputFieldWithFileWhenPresent,
  uploadFileIntoInputField,
  clearFieldWhenVisible,
  clear,
  clearFieldWhenVisibleAndFillItWithText,
  clearFieldAndFillItWithText,
  fillFieldWithTextWhenVisibleAndPressEnter,
  fillFieldWithTextAndPressEnter
};
