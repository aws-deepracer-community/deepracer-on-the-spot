"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationMenuDropdownWrapper = exports.TopNavigationUtilityWrapper = exports.OverflowMenu = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const link_1 = require("../link");
const button_1 = require("../button");
const button_dropdown_1 = require("../button-dropdown");
const styles_selectors_js_1 = require("../../../top-navigation/styles.selectors.js");
const styles_selectors_js_2 = require("../../../button-dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/menu-dropdown/styles.selectors.js");
class TopNavigationWrapper extends dom_1.ComponentWrapper {
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
    findOverflowMenuButton() {
        return this.findComponent(`[data-utility-special="menu-trigger"] > button`, button_1.default);
    }
    findOverflowMenu() {
        return (0, dom_1.createWrapper)().findComponent(`.${styles_selectors_js_1.default['overflow-menu-drawer']}`, OverflowMenu);
    }
}
exports.default = TopNavigationWrapper;
TopNavigationWrapper.rootSelector = `${styles_selectors_js_1.default['top-navigation']}:not(.${styles_selectors_js_1.default.hidden})`;
class OverflowMenu extends dom_1.ComponentWrapper {
    findDismissButton() {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-dismiss-button']);
    }
    findBackButton() {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-back-button']);
    }
    findTitle() {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-header-text--title']);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-header-text--secondary']);
    }
    findUtility(index) {
        return this.find(`[data-testid="__${index - 1}"]`);
    }
    findMenuDropdownItemById(id) {
        return this.find(`[data-testid="${id}"]`);
    }
}
exports.OverflowMenu = OverflowMenu;
class TopNavigationUtilityWrapper extends dom_1.ComponentWrapper {
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