"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorItemWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../anchor-navigation/test-classes/styles.selectors.js");
class AnchorNavigationWrapper extends selectors_1.ComponentWrapper {
    findAnchorNavigation() {
        return this.findByClassName(AnchorNavigationWrapper.rootSelector);
    }
    findAnchorNavigationList() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-list']);
    }
    findAnchors() {
        return this.findAll('li').map(wrapper => new AnchorItemWrapper(wrapper.getElement()));
    }
    /*
     * @param index 1-based index of the anchor item
     */
    findAnchorByIndex(index) {
        return this.findComponent(`[data-itemid="anchor-item-${index}"]`, AnchorItemWrapper);
    }
    findActiveAnchor() {
        return this.findComponent(`.${styles_selectors_js_1.default['anchor-item--active']}`, AnchorItemWrapper);
    }
    findAnchorLinkByHref(href) {
        return this.find(`.${styles_selectors_js_1.default['anchor-link']}[href="${href}"]`);
    }
}
exports.default = AnchorNavigationWrapper;
AnchorNavigationWrapper.rootSelector = styles_selectors_js_1.default.root;
class AnchorItemWrapper extends selectors_1.ElementWrapper {
    findLink() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link']);
    }
    findText() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link-text']);
    }
    findInfo() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link-info']);
    }
}
exports.AnchorItemWrapper = AnchorItemWrapper;
//# sourceMappingURL=index.js.map