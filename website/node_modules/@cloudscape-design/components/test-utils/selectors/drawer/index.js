"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../drawer/styles.selectors.js");
class DrawerWrapper extends selectors_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default['test-utils-drawer-content']);
    }
}
exports.default = DrawerWrapper;
DrawerWrapper.rootSelector = styles_selectors_js_1.default.drawer;
//# sourceMappingURL=index.js.map