"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const button_dropdown_1 = require("../button-dropdown");
const styles_selectors_js_1 = require("../../../breadcrumb-group/styles.selectors.js");
const styles_selectors_js_2 = require("../../../breadcrumb-group/item/styles.selectors.js");
const styles_selectors_js_3 = require("../../../button-dropdown/styles.selectors.js");
class BreadcrumbGroupWrapper extends selectors_1.ComponentWrapper {
    /**
     * Returns all breadcrumb items. Note that this includes the 'current' page item for backwards compatibility,
     * even though it is not technically a link.
     *
     * To find a specific item use the `findBreadcrumbLink(n)` function as chaining `findBreadcrumbLinks().get(n)` can return unexpected results.
     * @see findBreadcrumbLink
     */
    findBreadcrumbLinks() {
        return this.findAll(`.${styles_selectors_js_2.default.breadcrumb} .${styles_selectors_js_2.default.anchor}`);
    }
    /**
     * Returns an item for a given index. Note that this may return the 'current' page item for backwards compatibility,
     * even though it is not technically a link.
     *
     * @param index 1-based item index
     */
    findBreadcrumbLink(index) {
        // We insert the breadcrumb-ellipsis as the second element so we have to filter it out.
        // Unfortunately, there is no efficient CSS selector for it in CSS Selectors-3 spec.
        // In the future we can use li:nth-child(n of .awsui-breadcrumb-item) when Selectors-4 spec is supported https://caniuse.com/#feat=css-nth-child-of
        if (index > 1) {
            index++;
        }
        return this.find(`.${styles_selectors_js_1.default.item}:nth-child(${index}) .${styles_selectors_js_2.default.anchor}`);
    }
    findDropdown() {
        const buttonDropdown = this.find(`.${styles_selectors_js_3.default['button-dropdown']}`);
        return buttonDropdown && new button_dropdown_1.default(buttonDropdown.getElement());
    }
}
exports.default = BreadcrumbGroupWrapper;
BreadcrumbGroupWrapper.rootSelector = styles_selectors_js_1.default['breadcrumb-group'];
//# sourceMappingURL=index.js.map