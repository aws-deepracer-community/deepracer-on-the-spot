"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../flashbar/styles.selectors.js");
const flash_1 = require("./flash");
class FlashbarWrapper extends dom_1.ComponentWrapper {
    /**
     * Returns the individual flashes of this flashbar.
     *
     * If the items are stacked, only the item at the top of the stack is returned.
     */
    findItems() {
        return this.findAllByClassName(styles_selectors_js_1.default['flash-list-item']).map(item => new flash_1.default(item.getElement()));
    }
    /**
     * Returns the individual flashes of this flashbar given the item type.
     *
     * If the items are stacked, only the item at the top of the stack is returned.
     *
     * If an item is loading its type is considered as "info".
     */
    findItemsByType(type) {
        return this.findAll(`.${styles_selectors_js_1.default['flash-list-item']} .${styles_selectors_js_1.default[`flash-type-${type}`]}`).map(item => new flash_1.default(item.getElement()));
    }
    /**
     * Returns the toggle button that expands and collapses stacked notifications.
     */
    findToggleButton() {
        var _a, _b;
        return (_b = (_a = this.findByClassName(styles_selectors_js_1.default['notification-bar'])) === null || _a === void 0 ? void 0 : _a.find('button')) !== null && _b !== void 0 ? _b : null;
    }
}
exports.default = FlashbarWrapper;
FlashbarWrapper.rootSelector = styles_selectors_js_1.default.flashbar;
//# sourceMappingURL=index.js.map