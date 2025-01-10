"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDisplayOptionWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/drag-handle/styles.selectors.js");
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const toggle_1 = require("../toggle");
const getClassName = (suffix) => styles_selectors_js_1.default[`content-display-${suffix}`];
class ContentDisplayOptionWrapper extends selectors_1.ComponentWrapper {
    /**
     * Returns the drag handle for the option item.
     */
    findDragHandle() {
        return this.findByClassName(styles_selectors_js_2.default.handle);
    }
    /**
     * Returns the text label displayed in the option item.
     */
    findLabel() {
        return this.findByClassName(styles_selectors_js_1.default['content-display-option-label']);
    }
    /**
     * Returns the visibility toggle for the option item.
     */
    findVisibilityToggle() {
        return this.findComponent(`.${styles_selectors_js_1.default['content-display-option-toggle']}`, toggle_1.default);
    }
}
exports.ContentDisplayOptionWrapper = ContentDisplayOptionWrapper;
class ContentDisplayPreferenceWrapper extends selectors_1.ComponentWrapper {
    /**
     * Returns the title.
     */
    findTitle() {
        return this.findByClassName(getClassName('title'));
    }
    /**
     * Returns the preference description displayed below the title.
     */
    findDescription() {
        return this.findByClassName(getClassName('description'));
    }
    /**
     * Returns an option for a given index.
     *
     * @param index 1-based index of the option to return.
     */
    findOptionByIndex(index) {
        return this.findComponent(`.${getClassName('option')}:nth-child(${index})`, ContentDisplayOptionWrapper);
    }
    /**
     * Returns options that the user can reorder.
     */
    findOptions() {
        return this.findAllByClassName(getClassName('option')).map(wrapper => new ContentDisplayOptionWrapper(wrapper.getElement()));
    }
}
exports.default = ContentDisplayPreferenceWrapper;
ContentDisplayPreferenceWrapper.rootSelector = styles_selectors_js_1.default['content-display'];
//# sourceMappingURL=content-display-preference.js.map