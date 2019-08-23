// Type definitions for protractor-helpers v1.0.0
// Project: https://github.com/wix/protractor-helpers
// Definitions by: John Cant <https://github.com/johncant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as webdriver from "selenium-webdriver";

declare global {
    // ElementArrayFinder

    namespace protractor {
        interface ElementArrayFinder {
        }

        interface ElementFinder {
        }
    }

    // Matchers
    // TODO - Use `T` to improve types

    // Note: This augments a namespace from '@types/jasmine'.
    // Intentionally not referencing those types from this file as they introduce many globals,
    // and users may use protractor-helpers but not jasmine, and have different definitions of those globals (e.g. through `jest`)
    namespace jasmine {
        interface Matchers<T> {
            toBePresent() : boolean;
            toBeDisplayed() : boolean;
            toHaveCountOf(expectedCount : number) : boolean;
            toHaveText(expectedText : string) : boolean;
            toMatchRegex(regex : RegExp) : boolean;
            toMatchMoney(expectedValue : number, currencySymbol? : string) : boolean;
            toMatchMoneyWithFraction(expectedValue : number, currencySymbol?: string) : boolean;
            toHaveValue(actual: string | number) : boolean;
            toHaveClass(className : string) : boolean;
            toHaveUrl(url : string) : boolean;
            toBeDisabled() : boolean;
            toBeChecked() : boolean;
            toBeValid() : boolean;
            toBeInvalid() : boolean;
            toBeInvalidRequired() : boolean;
            toBeKendoSelected() : boolean;
        }
    }
}