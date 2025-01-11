"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../form-field/styles.selectors.js");
class FormFieldWrapper extends selectors_1.ComponentWrapper {
    findControl() {
        return this.findByClassName(styles_selectors_js_1.default.control);
    }
    findLabel() {
        return this.findByClassName(styles_selectors_js_1.default.label);
    }
    findInfo() {
        return this.findByClassName(styles_selectors_js_1.default.info);
    }
    findConstraint() {
        return this.find(`:scope > .${styles_selectors_js_1.default.hints} .${styles_selectors_js_1.default.constraint}`);
    }
    findError() {
        return this.find(`:scope > .${styles_selectors_js_1.default.hints} .${styles_selectors_js_1.default.error} .${styles_selectors_js_1.default.error__message}`);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default.description);
    }
    findSecondaryControl() {
        return this.findByClassName(styles_selectors_js_1.default['secondary-control']);
    }
}
exports.default = FormFieldWrapper;
FormFieldWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map