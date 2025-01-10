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
const button_1 = require("../button");
const styles_selectors_js_1 = require("../../../code-editor/styles.selectors.js");
class CodeEditorWrapper extends dom_1.ComponentWrapper {
    findEditor() {
        return this.findByClassName(styles_selectors_js_1.default.editor);
    }
    findNativeTextArea() {
        return this.find('textarea.ace_text-input');
    }
    findErrorsTab() {
        return this.findByClassName(styles_selectors_js_1.default['tab-button--errors']);
    }
    findWarningsTab() {
        return this.findByClassName(styles_selectors_js_1.default['tab-button--warnings']);
    }
    findSettingsButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['status-bar__cog-button']} button`, button_1.default);
    }
    findStatusBar() {
        return this.findByClassName(styles_selectors_js_1.default['status-bar']);
    }
    findPane() {
        return this.findByClassName(styles_selectors_js_1.default.pane);
    }
    findLoadingScreen() {
        return this.findByClassName(styles_selectors_js_1.default['loading-screen']);
    }
    findErrorScreen() {
        return this.findByClassName(styles_selectors_js_1.default['error-screen']);
    }
    /**
     * Sets the value of the component and calls the `onChange` handler
     *
     * @param value The value the input is set to.
     */
    setValue(value) {
        var _a;
        const editor = (_a = this.findEditor()) === null || _a === void 0 ? void 0 : _a.getElement();
        if (editor && 'env' in editor) {
            (0, test_utils_1.act)(() => {
                editor.env.editor.setValue(value, -1);
            });
        }
    }
}
CodeEditorWrapper.rootSelector = styles_selectors_js_1.default['code-editor'];
__decorate([
    dom_1.usesDom
], CodeEditorWrapper.prototype, "setValue", null);
exports.default = CodeEditorWrapper;
//# sourceMappingURL=index.js.map