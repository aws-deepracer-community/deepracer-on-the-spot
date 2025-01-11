"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../popover/styles.selectors.js");
const index_js_1 = require("../index.js");
class PopoverWrapper extends selectors_1.ComponentWrapper {
    findTrigger() {
        return this.findByClassName(styles_selectors_js_1.default.trigger);
    }
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the header when the popover is rendered with a portal
     */
    findHeader(options = {
        renderWithPortal: false
    }) {
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findByClassName(styles_selectors_js_1.default.header);
        }
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the content when the popover is rendered with a portal
     */
    findContent(options = {
        renderWithPortal: false
    }) {
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findByClassName(styles_selectors_js_1.default.content);
        }
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the dismiss button when the popover is rendered with a portal
     */
    findDismissButton(options = {
        renderWithPortal: false
    }) {
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findComponent(`.${styles_selectors_js_1.default['dismiss-control']}`, index_js_1.ButtonWrapper);
        }
        return this.findComponent(`.${styles_selectors_js_1.default['dismiss-control']}`, index_js_1.ButtonWrapper);
    }
}
exports.default = PopoverWrapper;
PopoverWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map