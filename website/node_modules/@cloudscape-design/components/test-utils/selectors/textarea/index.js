"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../textarea/styles.selectors.js");
class TextareaWrapper extends selectors_1.ComponentWrapper {
    findNativeTextarea() {
        return this.find(`.${styles_selectors_js_1.default.textarea}`);
    }
}
exports.default = TextareaWrapper;
TextareaWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map