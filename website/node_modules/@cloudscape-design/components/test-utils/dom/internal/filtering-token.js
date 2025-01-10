"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const select_1 = require("../select");
const styles_selectors_js_1 = require("../../../internal/components/filtering-token/styles.selectors.js");
class FilteringTokenWrapper extends dom_1.ComponentWrapper {
    findLabel() {
        return this.findByClassName(styles_selectors_js_1.default['token-content']);
    }
    findRemoveButton() {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-button']);
    }
    findTokenOperation() {
        return this.findComponent(`.${styles_selectors_js_1.default.select}`, select_1.default);
    }
}
exports.default = FilteringTokenWrapper;
FilteringTokenWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=filtering-token.js.map