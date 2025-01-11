"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../alert/styles.selectors.js");
const button_1 = require("../button");
class AlertWrapper extends dom_1.ComponentWrapper {
    /**
     * Returns the container node of the component.
     */
    findRootElement() {
        return this.findByClassName(styles_selectors_js_1.default.alert);
    }
    /**
     * Returns the dismiss button.
     *
     * The dismiss button is only rendered when the `dismissible` property is set to `true`.
     */
    findDismissButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['dismiss-button']}`, button_1.default);
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
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findActionSlot() {
        return this.findByClassName(styles_selectors_js_1.default['action-slot']);
    }
}
exports.default = AlertWrapper;
AlertWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map