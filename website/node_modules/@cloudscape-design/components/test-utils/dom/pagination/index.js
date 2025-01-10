"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../pagination/styles.selectors.js");
class PaginationWrapper extends dom_1.ComponentWrapper {
    findCurrentPage() {
        return this.findByClassName(styles_selectors_js_1.default['button-current']);
    }
    findPageNumbers() {
        return this.findAllByClassName(styles_selectors_js_1.default['page-number']);
    }
    /**
     * Returns a page number for a given index.
     *
     * @param index 1-based index of the page number to return.
     */
    findPageNumberByIndex(index) {
        // we need to skip the "previous page" button
        const pageIndex = index + 1;
        return this.find(`li:nth-child(${pageIndex}) .${styles_selectors_js_1.default.button}`);
    }
    findPreviousPageButton() {
        return this.find(`li:first-child .${styles_selectors_js_1.default.button}`);
    }
    findNextPageButton() {
        return this.find(`li:last-child .${styles_selectors_js_1.default.button}`);
    }
}
exports.default = PaginationWrapper;
PaginationWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map