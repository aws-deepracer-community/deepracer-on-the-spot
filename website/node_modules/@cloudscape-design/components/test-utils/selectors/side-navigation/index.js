"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideNavigationItemWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const expandable_section_1 = require("../expandable-section");
const styles_selectors_js_1 = require("../../../side-navigation/styles.selectors.js");
class SideNavigationWrapper extends selectors_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findHeaderLink() {
        return this.findByClassName(styles_selectors_js_1.default['header-link']);
    }
    findLinkByHref(href) {
        return this.find(`.${styles_selectors_js_1.default.link}[href="${href}"]`);
    }
    findActiveLink() {
        return this.findByClassName(styles_selectors_js_1.default['link-active']);
    }
    findItemByIndex(index) {
        return this.findComponent(`.${styles_selectors_js_1.default['list-variant-root']} > [data-itemid="item-${index}"]`, SideNavigationItemWrapper);
    }
}
exports.default = SideNavigationWrapper;
SideNavigationWrapper.rootSelector = styles_selectors_js_1.default.root;
class SideNavigationItemWrapper extends selectors_1.ElementWrapper {
    findSection() {
        return this.findComponent(`.${styles_selectors_js_1.default.section}`, expandable_section_1.default);
    }
    findSectionGroup() {
        return this.findByClassName(styles_selectors_js_1.default['section-group']);
    }
    findSectionGroupTitle() {
        return this.findByClassName(styles_selectors_js_1.default['section-group-title']);
    }
    findExpandableLinkGroup() {
        return this.findComponent(`.${styles_selectors_js_1.default['expandable-link-group']}`, expandable_section_1.default);
    }
    findDivider() {
        return this.findByClassName(styles_selectors_js_1.default.divider);
    }
    findLink() {
        return this.findByClassName(styles_selectors_js_1.default.link);
    }
    findSectionTitle() {
        var _a, _b;
        return (_b = (_a = this.findSection()) === null || _a === void 0 ? void 0 : _a.findHeader()) !== null && _b !== void 0 ? _b : null;
    }
    findItemByIndex(index) {
        return this.findComponent(`[data-itemid="item-${index}"]`, SideNavigationItemWrapper);
    }
    findItems() {
        return this.findAll('li').map(wrapper => new SideNavigationItemWrapper(wrapper.getElement()));
    }
}
exports.SideNavigationItemWrapper = SideNavigationItemWrapper;
//# sourceMappingURL=index.js.map