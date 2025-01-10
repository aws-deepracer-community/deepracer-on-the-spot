"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../internal/components/option/styles.selectors.js");
class OptionWrapper extends dom_1.ComponentWrapper {
    findLabel() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.findByClassName(styles_selectors_js_1.default.label);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default.description);
    }
    findLabelTag() {
        return this.findByClassName(styles_selectors_js_1.default['label-tag']);
    }
    findTags() {
        return this.findAllByClassName(styles_selectors_js_1.default.tag);
    }
}
exports.default = OptionWrapper;
OptionWrapper.rootSelector = styles_selectors_js_1.default.option;
//# sourceMappingURL=option.js.map