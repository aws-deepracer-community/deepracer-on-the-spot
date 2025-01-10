"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../token-group/styles.selectors.js");
const option_1 = require("../internal/option");
class TokenWrapper extends dom_1.ComponentWrapper {
    findOption() {
        return this.findComponent(`.${option_1.default.rootSelector}`, option_1.default);
    }
    findLabel() {
        return this.findOption().findLabel();
    }
    findDismiss() {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-button']);
    }
}
exports.default = TokenWrapper;
TokenWrapper.rootSelector = styles_selectors_js_1.default.token;
//# sourceMappingURL=token.js.map