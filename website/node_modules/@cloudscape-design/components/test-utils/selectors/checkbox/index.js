"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../checkbox/styles.selectors.js");
const abstract_switch_1 = require("../internal/abstract-switch");
class CheckboxWrapper extends selectors_1.ComponentWrapper {
    findAbstractSwitch() {
        return new abstract_switch_1.default(this.getElement());
    }
    findLabel() {
        return this.findAbstractSwitch().findLabel();
    }
    findNativeInput() {
        return this.findAbstractSwitch().findNativeInput();
    }
    findDescription() {
        return this.findAbstractSwitch().findDescription();
    }
}
exports.default = CheckboxWrapper;
CheckboxWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map