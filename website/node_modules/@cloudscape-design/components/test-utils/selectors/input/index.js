"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_input_1 = require("./base-input");
const styles_selectors_js_1 = require("../../../input/styles.selectors.js");
class InputWrapper extends base_input_1.default {
    findClearButton() {
        return this.find(`.${styles_selectors_js_1.default['input-button-right']}`);
    }
}
exports.default = InputWrapper;
InputWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map