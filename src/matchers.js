'use strict';

(function () {
        function createMessage(actual, message, isNot) {
            var msg = message
                .replace('{{actual}}', actual)
                .replace('{{not}}', (isNot ? ' not ' : ' '));

            if (actual.locator) {
                msg = msg.replace('{{locator}}', actual.locator());
            }

            return msg;
        }

        function hasClass(element, className) {
            return element.getAttribute('class').then(function (classes) {
                return classes.split(' ').indexOf(className) !== -1;
            });
        };

        function hasValue(element, expectedValue) {
            return element.getAttribute('value').then(function (value) {
                return value === expectedValue;
            });
        };

        function hasLink(element, url) {
            return element.getAttribute('href').then(function (href) {
                return href === url;
            });
        };

        function isDisabled(element) {
            return element.getAttribute('disabled').then(function (value) {
                return value === 'true';
            });
        };


        function isChecked(element) {
            return element.getAttribute('checked').then(function (value) {
                return value;
            });
        };
        
        function isKendoSelected(element) {
            return hasClass(element, "k-state-selected");
        }

        beforeEach(function () {
            jasmine.addMatchers({
                toBePresent: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = actual.isPresent().then(function (pass) {
                                result.message = createMessage(actual, 'Expected {{locator}}{{not}}to Be Present', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeDisplayed: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = actual.isDisplayed().then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to Be Displayed', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toHaveCountOf: function () {
                    return {
                        compare: function (actual, expectedCount) {
                            var result = {};
                            result.pass = (function () {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to have length of ' + expectedCount + ' but was {{actual}}', actual === expectedCount);
                                return actual === expectedCount;
                            })();
                            return result;
                        }
                    };
                },
                toHaveText: function () {
                    return {
                        compare: function (actual, expectedText) {
                            var result = {};
                            result.pass = actual.getText().then(function (text) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to have text ' + expectedText + ' but was ' + text, (text === expectedText));
                                return text === expectedText;
                            });
                            return result;
                        }
                    };
                },
                toMatchRegex: function () {
                    return {
                        compare: function (actual, expectedPattern) {
                            var re = new RegExp(expectedPattern);
                            var result = {};
                            result.pass = actual.getText().then(function (text) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}with text ' + text + '{{not}}to match pattern ' + expectedPattern, re.test(text));
                                return re.test(text);
                            });
                            return result;
                        }
                    };
                },
                toMatchMoney: function () {
                    return {
                        compare: function (actual, expectedValue, currencySymbol) {
                            var regexExpectedValue = createMoneyRegexp(actual, expectedValue, currencySymbol);
                            var result = {};
                            result.pass = (function () {
                                result.message = this.createMessage(actual, 'Expected ' + actual + '{{not}}to match money pattern ' + regexExpectedValue, regexExpectedValue.test(actual));
                                return regexExpectedValue.test(actual);
                            })();
                            return result;
                        }
                    };
                },
                toMatchMoneyWithFraction: function () {
                    return {
                        compare: function (actual, expectedValue, currencySymbol) {
                            var regexExpectedValue = createMoneyRegexp(actual, expectedValue, currencySymbol, true);
                            var result = {};
                            result.pass = (function () {
                                result.message = this.createMessage(actual, 'Expected ' + actual + '{{not}}to match money pattern ' + regexExpectedValue, regexExpectedValue.test(actual));
                                return regexExpectedValue.test(actual);
                            })();
                            return result;
                        }
                    };
                },
                toHaveValue: function () {
                    return {
                        compare: function (actual, expectedValue) {
                            var result = {};
                            result.pass = hasValue(actual, expectedValue).then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to have value ' + expectedValue, pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toHaveClass: function () {
                    return {
                        compare: function (actual, className) {
                            var result = {};
                            result.pass = hasClass(actual, className).then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to have class ' + className, pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toHaveUrl: function () {
                    return {
                        compare: function (actual, url) {
                            var result = {};
                            result.pass = hasLink(actual, url).then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to have url ' + url, pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeDisabled: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = isDisabled(actual).then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to be Disabled', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeChecked: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = isChecked(actual).then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}}to be checked', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeKendoSelected: function () {
                  return {
                    compare: function (actual) {
                        var result = {};
                        result.pass = isKendoSelected(actual).then(function (pass) {
                            result.message = this.createMessage(actual, 'Expected Kendo element {{locator}}{{not}}to be selected', pass);
                            return pass;
                        });
                        return result;
                    }  
                  };
                },
                toBeValid: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = hasClass(actual, 'ng-valid').then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}} to have valid input value', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeInvalid: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = hasClass(actual, 'ng-invalid').then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}} to have invalid input value', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                },
                toBeInvalidRequired: function () {
                    return {
                        compare: function (actual) {
                            var result = {};
                            result.pass = hasClass(actual, 'ng-invalid-required').then(function (pass) {
                                result.message = this.createMessage(actual, 'Expected {{locator}}{{not}} to be required and invalid (when empty)', pass);
                                return pass;
                            });
                            return result;
                        }
                    };
                }
            });
        });
    }

)();