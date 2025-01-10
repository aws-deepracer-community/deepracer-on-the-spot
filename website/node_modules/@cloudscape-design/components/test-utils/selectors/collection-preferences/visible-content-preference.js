"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const toggle_1 = require("../toggle");
const styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
const getClassName = (suffix) => styles_selectors_js_1.default[`visible-content-${suffix}`];
class VisibleContentPreferenceWrapper extends selectors_1.ComponentWrapper {
    findTitle() {
        return this.findByClassName(getClassName('title'));
    }
    findOptionsGroups() {
        return this.findAllByClassName(getClassName('group'));
    }
    findOptions() {
        return this.findAllByClassName(getClassName('option'));
    }
    /**
     * Returns a content selector toggle.
     *
     * @param groupIndex 1-based index of the content group.
     * @param optionIndex 1-based index of the option to return within the group.
     */
    findToggleByIndex(groupIndex, optionIndex) {
        const groupSelector = `.${getClassName('groups')} > *:nth-child(${groupIndex})`;
        const optionSelector = `.${getClassName('option')}:nth-child(${optionIndex})`;
        return this.findComponent(`${groupSelector} ${optionSelector} .${getClassName('toggle')}`, toggle_1.default);
    }
}
exports.default = VisibleContentPreferenceWrapper;
VisibleContentPreferenceWrapper.rootSelector = styles_selectors_js_1.default['visible-content'];
//# sourceMappingURL=visible-content-preference.js.map