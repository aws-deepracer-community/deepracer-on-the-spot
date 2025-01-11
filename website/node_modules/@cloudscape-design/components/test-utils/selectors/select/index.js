"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_selectors_js_1 = require("../../../select/styles.selectors.js");
const styles_selectors_js_2 = require("../../../select/parts/styles.selectors.js");
const styles_selectors_js_3 = require("../../../input/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/button-trigger/styles.selectors.js");
const styles_selectors_js_5 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_6 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const input_1 = require("../input");
const dropdown_host_1 = require("../internal/dropdown-host");
class SelectWrapper extends dropdown_host_1.default {
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findByClassName(styles_selectors_js_6.default.recovery);
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findStatusIndicator(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findByClassName(styles_selectors_js_5.default.root);
    }
    /**
     * Returns the input that is used for filtering.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findFilteringInput(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findComponent(`.${styles_selectors_js_3.default['input-container']}`, input_1.default);
    }
    findPlaceholder() {
        return this.findByClassName(styles_selectors_js_2.default.placeholder);
    }
    findTrigger() {
        return this.findByClassName(styles_selectors_js_4.default['button-trigger']);
    }
}
exports.default = SelectWrapper;
SelectWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map