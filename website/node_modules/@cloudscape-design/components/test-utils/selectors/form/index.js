"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../form/styles.selectors.js");
class FormWrapper extends selectors_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findError() {
        return this.findByClassName(styles_selectors_js_1.default.error);
    }
    findActions() {
        return this.findByClassName(styles_selectors_js_1.default.actions);
    }
    findSecondaryActions() {
        return this.findByClassName(styles_selectors_js_1.default['secondary-actions']);
    }
}
exports.default = FormWrapper;
FormWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map