"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationMenuDropdownWrapper = exports.TopNavigationUtilityWrapper = exports.MenuDropdownWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const link_1 = require("../../link");
const button_1 = require("../../button");
const button_dropdown_1 = require("../../button-dropdown");
const styles_selectors_js_1 = require("../../../../top-navigation/1.0-beta/styles.selectors.js");
const styles_selectors_js_2 = require("../../../../button-dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../../internal/components/menu-dropdown/styles.selectors.js");
class TopNavigationWrapper extends selectors_1.ComponentWrapper {
    findIdentityLink() {
        return this.find(`.${styles_selectors_js_1.default.identity} a`);
    }
    findLogo() {
        return this.find(`.${styles_selectors_js_1.default.logo}`);
    }
    findTitle() {
        return this.find(`.${styles_selectors_js_1.default.title}`);
    }
    findSearch() {
        return this.find(`.${styles_selectors_js_1.default.search}`);
    }
    findUtilities() {
        return this.findAll(`.${styles_selectors_js_1.default['utility-wrapper']}[data-utility-index]`).map(i => new TopNavigationUtilityWrapper(i.getElement()));
    }
    findUtility(index) {
        return this.findComponent(`.${styles_selectors_js_1.default['utility-wrapper']}[data-utility-index="${index - 1}"]`, TopNavigationUtilityWrapper);
    }
    findSearchButton() {
        return this.find(`.${styles_selectors_js_1.default['utility-wrapper']}[data-utility-special="search"] a`);
    }
    findOverflowMenuButtonDropdown() {
        return this.findComponent(`.${styles_selectors_js_1.default.trigger}`, MenuDropdownWrapper);
    }
}
exports.default = TopNavigationWrapper;
TopNavigationWrapper.rootSelector = `${styles_selectors_js_1.default['top-navigation']}:not(.${styles_selectors_js_1.default.hidden})`;
class MenuDropdownWrapper extends button_dropdown_1.default {
    findNativeButton() {
        // ButtonDropdown always has a button
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find(`button.${styles_selectors_js_3.default.button}`);
    }
}
exports.MenuDropdownWrapper = MenuDropdownWrapper;
class TopNavigationUtilityWrapper extends selectors_1.ComponentWrapper {
    findButtonLinkType() {
        return this.findComponent(`.${link_1.default.rootSelector}`, link_1.default);
    }
    findPrimaryButtonType() {
        return this.findComponent(`.${button_1.default.rootSelector}`, button_1.default);
    }
    findMenuDropdownType() {
        return this.findComponent(`.${button_dropdown_1.default.rootSelector}`, TopNavigationMenuDropdownWrapper);
    }
}
exports.TopNavigationUtilityWrapper = TopNavigationUtilityWrapper;
class TopNavigationMenuDropdownWrapper extends button_dropdown_1.default {
    findNativeButton() {
        return this.find(`.${styles_selectors_js_3.default.button}`);
    }
    findTitle() {
        return this.findByClassName(styles_selectors_js_2.default.title);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_2.default.description);
    }
}
exports.TopNavigationMenuDropdownWrapper = TopNavigationMenuDropdownWrapper;
//# sourceMappingURL=index.js.map