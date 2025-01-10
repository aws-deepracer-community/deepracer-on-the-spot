"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../internal/components/abstract-switch/styles.selectors.js");
class AbstractSwitchWrapper extends dom_1.ElementWrapper {
    findLabel() {
        return this.findByClassName(styles_selectors_js_1.default['label-wrapper']);
    }
    findNativeInput() {
        return this.find(`.${styles_selectors_js_1.default.control} > input`);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default.description);
    }
}
exports.default = AbstractSwitchWrapper;
AbstractSwitchWrapper.rootSelector = styles_selectors_js_1.default.wrapper;
//# sourceMappingURL=abstract-switch.js.map