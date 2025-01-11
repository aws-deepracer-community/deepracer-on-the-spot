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
const test_utils_1 = require("react-dom/test-utils");
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../textarea/styles.selectors.js");
class TextareaWrapper extends dom_1.ComponentWrapper {
    findNativeTextarea() {
        return this.find(`.${styles_selectors_js_1.default.textarea}`);
    }
    /**
     * Gets the value of the component.
     *
     * Returns the current value of the textarea.
     */
    getTextareaValue() {
        return this.findNativeTextarea().getElement().value;
    }
    /**
     * Sets the value of the component and calls the onChange handler.
     *
     * @param value value to set the textarea to.
     */
    setTextareaValue(value) {
        const element = this.findNativeTextarea().getElement();
        (0, test_utils_1.act)(() => {
            test_utils_1.Simulate.change(element, { target: { value } });
        });
    }
}
TextareaWrapper.rootSelector = styles_selectors_js_1.default.root;
__decorate([
    dom_1.usesDom
], TextareaWrapper.prototype, "getTextareaValue", null);
__decorate([
    dom_1.usesDom
], TextareaWrapper.prototype, "setTextareaValue", null);
exports.default = TextareaWrapper;
//# sourceMappingURL=index.js.map