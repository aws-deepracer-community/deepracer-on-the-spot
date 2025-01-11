"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../internal/components/chart-legend/styles.selectors.js");
class ChartLegendWrapper extends dom_1.ComponentWrapper {
    findTitle() {
        return this.findByClassName(styles_selectors_js_1.default.title);
    }
    findHighlightedItem() {
        return this.findByClassName(styles_selectors_js_1.default['marker--highlighted']);
    }
    findItems() {
        return this.findAllByClassName(styles_selectors_js_1.default.marker);
    }
    findNativeList() {
        return this.findByClassName(styles_selectors_js_1.default.list);
    }
}
exports.default = ChartLegendWrapper;
ChartLegendWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=chart-legend.js.map