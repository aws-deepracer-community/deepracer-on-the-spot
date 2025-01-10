"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const button_1 = require("../button");
const styles_selectors_js_1 = require("../../../split-panel/styles.selectors.js");
class SplitPanelWrapper extends selectors_1.ComponentWrapper {
    findHeader() {
        return this.find(`.${styles_selectors_js_1.default['header-text']}`);
    }
    findPreferencesButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['preferences-button']}`, button_1.default);
    }
    findCloseButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['close-button']}`, button_1.default);
    }
    findOpenButton() {
        const wrapper = (0, selectors_1.createWrapper)();
        return wrapper.findComponent(`.${styles_selectors_js_1.default['open-button']}`, button_1.default);
    }
    findSlider() {
        return this.findByClassName(styles_selectors_js_1.default.slider);
    }
    /**
     * Returns the same panel if it's currently open in bottom position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelBottom() {
        return this.matches(`.${styles_selectors_js_1.default['position-bottom']}:not(.${styles_selectors_js_1.default['drawer-closed']})`);
    }
    /**
     * Returns the same panel if it's currently open in side position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelSide() {
        return this.matches(`.${styles_selectors_js_1.default['position-side']}:not(.${styles_selectors_js_1.default['drawer-closed']})`);
    }
}
exports.default = SplitPanelWrapper;
SplitPanelWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map