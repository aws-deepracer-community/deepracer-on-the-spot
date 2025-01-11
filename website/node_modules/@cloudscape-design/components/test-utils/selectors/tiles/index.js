"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const tile_1 = require("./tile");
const styles_selectors_js_1 = require("../../../tiles/styles.selectors.js");
class TilesWrapper extends selectors_1.ComponentWrapper {
    findItems() {
        return this.findAllByClassName(styles_selectors_js_1.default['tile-container']).map(r => new tile_1.default(r.getElement()));
    }
    findInputByValue(value) {
        const safeValue = (0, utils_1.escapeSelector)(value);
        return this.find(`input[value="${safeValue}"]`);
    }
    findItemByValue(value) {
        const toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(`.${tile_1.default.rootSelector}[data-value="${toReplace}"]`, tile_1.default);
    }
}
exports.default = TilesWrapper;
TilesWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map