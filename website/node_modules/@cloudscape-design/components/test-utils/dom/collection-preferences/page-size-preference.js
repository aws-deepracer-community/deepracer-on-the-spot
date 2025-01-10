"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const form_field_1 = require("../form-field");
const radio_group_1 = require("../radio-group");
const styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
class PageSizePreferenceWrapper extends dom_1.ComponentWrapper {
    findTitle() {
        return this.findComponent(`.${styles_selectors_js_1.default['page-size-form-field']}`, form_field_1.default).findLabel();
    }
    findOptions() {
        return this.findComponent(`.${styles_selectors_js_1.default['page-size-radio-group']}`, radio_group_1.default).findButtons();
    }
}
exports.default = PageSizePreferenceWrapper;
PageSizePreferenceWrapper.rootSelector = styles_selectors_js_1.default['page-size'];
//# sourceMappingURL=page-size-preference.js.map