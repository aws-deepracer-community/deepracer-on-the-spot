"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../help-panel/styles.selectors.js");
class HelpPanelWrapper extends dom_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findFooter() {
        return this.findByClassName(styles_selectors_js_1.default.footer);
    }
}
exports.default = HelpPanelWrapper;
HelpPanelWrapper.rootSelector = styles_selectors_js_1.default['help-panel'];
//# sourceMappingURL=index.js.map