"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../input/styles.selectors.js");
class BaseInputWrapper extends selectors_1.ComponentWrapper {
    findNativeInput() {
        // Input component always have native input
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find(`.${styles_selectors_js_1.default.input}`);
    }
}
exports.default = BaseInputWrapper;
//# sourceMappingURL=base-input.js.map