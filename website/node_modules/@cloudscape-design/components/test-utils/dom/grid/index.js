"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../grid/styles.selectors.js");
class GridWrapper extends dom_1.ComponentWrapper {
    /**
     * Returns a column from the grid for a given index.
     * @param columnIndex 1-based index of the column to return.
     */
    findColumn(columnIndex) {
        return this.find(`.${styles_selectors_js_1.default['grid-column']}:nth-child(${columnIndex}) > div`);
    }
}
exports.default = GridWrapper;
GridWrapper.rootSelector = styles_selectors_js_1.default.grid;
//# sourceMappingURL=index.js.map