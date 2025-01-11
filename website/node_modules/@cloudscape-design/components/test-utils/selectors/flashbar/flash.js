"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../flashbar/styles.selectors.js");
const button_1 = require("../button");
class FlashWrapper extends selectors_1.ComponentWrapper {
    /**
     * Returns the dismiss button.
     *
     * The dismiss button is only rendered when the `dismissible` property is set to `true`.
     */
    findDismissButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['dismiss-button']}`, button_1.default);
    }
    /**
     * Returns the action slot.
     */
    findAction() {
        return this.findByClassName(styles_selectors_js_1.default['action-slot']);
    }
    /**
     * Returns the action button.
     *
     * The action button is only rendered when the `buttonText` property is set.
     */
    findActionButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['action-button']}`, button_1.default);
    }
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default['flash-header']);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default['flash-content']);
    }
}
exports.default = FlashWrapper;
FlashWrapper.rootSelector = styles_selectors_js_1.default['flash-list-item'];
//# sourceMappingURL=flash.js.map