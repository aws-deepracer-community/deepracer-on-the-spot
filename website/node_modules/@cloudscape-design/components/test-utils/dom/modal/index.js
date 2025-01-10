"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../modal/styles.selectors.js");
class ModalWrapper extends dom_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findFooter() {
        return this.findByClassName(styles_selectors_js_1.default.footer);
    }
    findDismissButton() {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-control']);
    }
    isVisible() {
        return !this.element.classList.contains(styles_selectors_js_1.default.hidden);
    }
}
ModalWrapper.rootSelector = styles_selectors_js_1.default.root;
__decorate([
    dom_1.usesDom
], ModalWrapper.prototype, "isVisible", null);
exports.default = ModalWrapper;
//# sourceMappingURL=index.js.map