"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../text-filter/styles.selectors.js");
const input_1 = require("../input");
class TextFilterWrapper extends selectors_1.ComponentWrapper {
    findInput() {
        return this.findComponent(`.${styles_selectors_js_1.default.input}`, input_1.default);
    }
    findResultsCount() {
        return this.findByClassName(styles_selectors_js_1.default.results);
    }
}
exports.default = TextFilterWrapper;
TextFilterWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map