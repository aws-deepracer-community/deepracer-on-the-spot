"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../input/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/autosuggest-input/styles.selectors.js");
const index_js_1 = require("../index.js");
const dropdown_js_1 = require("./dropdown.js");
class AutosuggestInputWrapper extends selectors_1.ComponentWrapper {
    findInput() {
        return this.findComponent(`.${styles_selectors_js_1.default['input-container']}`, index_js_1.InputWrapper);
    }
    findDropdown() {
        return this.findComponent(`.${styles_selectors_js_2.default.root}`, dropdown_js_1.default);
    }
}
exports.default = AutosuggestInputWrapper;
AutosuggestInputWrapper.rootSelector = styles_selectors_js_3.default.root;
//# sourceMappingURL=autosuggest-input.js.map