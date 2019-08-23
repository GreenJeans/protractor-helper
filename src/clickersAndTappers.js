const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const clickWhenClickable = async function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("clickWhenClickable", "click");
  await this.click(htmlElement, timeoutInMilliseconds);
};

const click = async function(
  htmlElement = utils.requiredParam(click),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
   await utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  await htmlElement.click();
};

const tapWhenTappable = async function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.replaceObsoleteFunction("tapWhenTappable", "tap");
  await this.tap(htmlElement, timeoutInMilliseconds);
};

const tap = async function(
  htmlElement = utils.requiredParam(tap),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement);
  await utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  await browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

module.exports = {
  clickWhenClickable,
  click,
  tapWhenTappable,
  tap
};
