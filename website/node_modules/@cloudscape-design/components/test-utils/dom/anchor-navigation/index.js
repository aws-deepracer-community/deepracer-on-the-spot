"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorItemWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../anchor-navigation/test-classes/styles.selectors.js");
class AnchorNavigationWrapper extends dom_1.ComponentWrapper {
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
class AnchorItemWrapper extends dom_1.ElementWrapper {
    findLink() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link']);
    }
    findText() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link-text']);
    }
    findInfo() {
        return this.findByClassName(styles_selectors_js_1.default['anchor-link-info']);
    }
    isActive() {
        var _a;
        return ((_a = this.findByClassName(styles_selectors_js_1.default['anchor-link'])) === null || _a === void 0 ? void 0 : _a.getElement().getAttribute('aria-current')) === 'true';
    }
}
__decorate([
    dom_1.usesDom
], AnchorItemWrapper.prototype, "isActive", null);
exports.AnchorItemWrapper = AnchorItemWrapper;
//# sourceMappingURL=index.js.map