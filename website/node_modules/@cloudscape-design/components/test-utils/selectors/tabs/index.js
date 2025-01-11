"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../tabs/styles.selectors.js");
class TabsWrapper extends selectors_1.ComponentWrapper {
    /**
     * Finds all tab headers and returns the clickable elements from their labels.
     */
    findTabLinks() {
        return this.findAllByClassName(styles_selectors_js_1.default['tabs-tab-link']);
    }
    /**
     * Finds the tab at the given position (1-based) and returns the clickable element from its tab label.
     *
     * @param index 1-based index of the clickable element to return
     */
    findTabLinkByIndex(index) {
        return this.find(`.${styles_selectors_js_1.default['tabs-tab']}:nth-child(${index}) .${styles_selectors_js_1.default['tabs-tab-link']}`);
    }
    /**
     * Finds the tab with the given ID and returns the clickable element from its tab label.
     *
     * @param index ID of the clickable element to return
     */
    findTabLinkById(id) {
        return this.find(`.${styles_selectors_js_1.default['tabs-tab-link']}[data-testid="${id}"]`);
    }
    /**
     * Finds the currently active tab and returns the clickable element from its tab label.
     */
    findActiveTab() {
        return this.find(`.${styles_selectors_js_1.default['tabs-tab-active']}`);
    }
    /**
     * Finds the currently displayed tab content and returns it.
     */
    findTabContent() {
        return this.find(`.${styles_selectors_js_1.default['tabs-content-active']}`);
    }
}
exports.default = TabsWrapper;
TabsWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map