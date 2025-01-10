"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../button/styles.selectors.js");
const styles_selectors_js_2 = require("../../../spinner/styles.selectors.js");
class ButtonWrapper extends selectors_1.ComponentWrapper {
    findLoadingIndicator() {
        return this.find(`.${styles_selectors_js_1.default['icon-left']}.${styles_selectors_js_2.default.root}`);
    }
    findTextRegion() {
        return this.find(`.${styles_selectors_js_1.default.content}`);
    }
}
exports.default = ButtonWrapper;
ButtonWrapper.rootSelector = styles_selectors_js_1.default.button;
//# sourceMappingURL=index.js.map