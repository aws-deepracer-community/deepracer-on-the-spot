"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../header/styles.selectors.js");
class HeaderWrapper extends selectors_1.ComponentWrapper {
    findHeadingText() {
        return this.findByClassName(styles_selectors_js_1.default['heading-text']);
    }
    findCounter() {
        return this.findByClassName(styles_selectors_js_1.default.counter);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default.description);
    }
    findInfo() {
        return this.findByClassName(styles_selectors_js_1.default.info);
    }
    findActions() {
        return this.findByClassName(styles_selectors_js_1.default.actions);
    }
}
exports.default = HeaderWrapper;
HeaderWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map