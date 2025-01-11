"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const radio_button_1 = require("./radio-button");
const styles_selectors_js_1 = require("../../../radio-group/styles.selectors.js");
class RadioGroupWrapper extends selectors_1.ComponentWrapper {
    findButtons() {
        return this.findAllByClassName(styles_selectors_js_1.default.radio).map(r => new radio_button_1.default(r.getElement()));
    }
    findInputByValue(value) {
        const safeValue = (0, utils_1.escapeSelector)(value);
        return this.find(`input[value="${safeValue}"]`);
    }
}
exports.default = RadioGroupWrapper;
RadioGroupWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map