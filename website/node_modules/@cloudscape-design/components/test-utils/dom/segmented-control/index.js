"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../segmented-control/styles.selectors.js");
class SegmentedControlWrapper extends dom_1.ComponentWrapper {
    findSegments() {
        return this.findAllByClassName(styles_selectors_js_1.default.segment);
    }
    findSelectedSegment() {
        return this.findByClassName(styles_selectors_js_1.default.selected);
    }
}
exports.default = SegmentedControlWrapper;
SegmentedControlWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map