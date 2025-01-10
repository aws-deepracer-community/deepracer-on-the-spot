"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const form_field_1 = require("../form-field");
const radio_group_1 = require("../radio-group");
const styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
class StickyColumnsPreferenceWrapper extends dom_1.ComponentWrapper {
    findTitle() {
        return this.findComponent(`.${styles_selectors_js_1.default['sticky-columns-form-field']}`, form_field_1.default).findLabel();
    }
    findDescription() {
        return this.findComponent(`.${styles_selectors_js_1.default['sticky-columns-form-field']}`, form_field_1.default).findDescription();
    }
    findRadioGroup() {
        return this.findComponent(`.${styles_selectors_js_1.default['sticky-columns-radio-group']}`, radio_group_1.default);
    }
}
exports.default = StickyColumnsPreferenceWrapper;
StickyColumnsPreferenceWrapper.firstRootSelector = styles_selectors_js_1.default['sticky-columns-first'];
StickyColumnsPreferenceWrapper.lastRootSelector = styles_selectors_js_1.default['sticky-columns-last'];
//# sourceMappingURL=sticky-columns-preference.js.map