"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const button_1 = require("../button");
const checkbox_1 = require("../checkbox");
const modal_1 = require("../modal");
const visible_content_preference_1 = require("./visible-content-preference");
const page_size_preference_1 = require("./page-size-preference");
const sticky_columns_preference_1 = require("./sticky-columns-preference");
const content_display_preference_1 = require("./content-display-preference");
const styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
class PreferencesModalWrapper extends modal_1.default {
    findCancelButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['cancel-button']}`, button_1.default);
    }
    findConfirmButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['confirm-button']}`, button_1.default);
    }
    findWrapLinesPreference() {
        return this.findComponent(`.${styles_selectors_js_1.default['wrap-lines']}`, checkbox_1.default);
    }
    findStripedRowsPreference() {
        return this.findComponent(`.${styles_selectors_js_1.default['striped-rows']}`, checkbox_1.default);
    }
    findContentDensityPreference() {
        return this.findComponent(`.${styles_selectors_js_1.default['content-density']}`, checkbox_1.default);
    }
    findPageSizePreference() {
        return this.findComponent(`.${page_size_preference_1.default.rootSelector}`, page_size_preference_1.default);
    }
    findVisibleContentPreference() {
        return this.findComponent(`.${visible_content_preference_1.default.rootSelector}`, visible_content_preference_1.default);
    }
    findStickyColumnsPreference(firstOrLast = 'first') {
        const rootSelector = firstOrLast === 'first' ? 'firstRootSelector' : 'lastRootSelector';
        return this.findComponent(`.${sticky_columns_preference_1.default[rootSelector]}`, sticky_columns_preference_1.default);
    }
    findContentDisplayPreference() {
        return this.findComponent(`.${content_display_preference_1.default.rootSelector}`, content_display_preference_1.default);
    }
    findCustomPreference() {
        return this.findByClassName(styles_selectors_js_1.default.custom);
    }
}
PreferencesModalWrapper.rootSelector = styles_selectors_js_1.default['modal-root'];
class CollectionPreferencesWrapper extends selectors_1.ComponentWrapper {
    findModal() {
        return (0, selectors_1.createWrapper)().findComponent(`.${styles_selectors_js_1.default['modal-root']}`, PreferencesModalWrapper);
    }
    findTriggerButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['trigger-button']}`, button_1.default);
    }
}
exports.default = CollectionPreferencesWrapper;
CollectionPreferencesWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map