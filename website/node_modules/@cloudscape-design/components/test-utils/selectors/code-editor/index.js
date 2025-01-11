"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const button_1 = require("../button");
const styles_selectors_js_1 = require("../../../code-editor/styles.selectors.js");
class CodeEditorWrapper extends selectors_1.ComponentWrapper {
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
}
exports.default = CodeEditorWrapper;
CodeEditorWrapper.rootSelector = styles_selectors_js_1.default['code-editor'];
//# sourceMappingURL=index.js.map