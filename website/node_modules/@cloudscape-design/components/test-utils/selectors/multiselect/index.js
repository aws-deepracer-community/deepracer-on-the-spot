"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_selectors_js_1 = require("../../../multiselect/styles.selectors.js");
const styles_selectors_js_2 = require("../../../token-group/styles.selectors.js");
const styles_selectors_js_3 = require("../../../input/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/button-trigger/styles.selectors.js");
const styles_selectors_js_5 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_6 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const input_1 = require("../input");
const token_group_1 = require("../token-group");
const dropdown_host_1 = require("../internal/dropdown-host");
class MultiselectWrapper extends dropdown_host_1.default {
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
        return this.findByClassName(styles_selectors_js_4.default.placeholder);
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
     * Returns a token.
     *
     * @param tokenIndex 1-based index of the token to return
     */
    findToken(tokenIndex) {
        const tokenGroup = this.findComponent(`.${styles_selectors_js_2.default.root}`, token_group_1.default);
        return tokenGroup.findToken(tokenIndex);
    }
    /**
     * Returns a token toggle button.
     */
    findTokenToggle() {
        const tokenGroup = this.findComponent(`.${styles_selectors_js_2.default.root}`, token_group_1.default);
        return tokenGroup.findTokenToggle();
    }
    findTokens() {
        const tokenGroup = this.findComponent(`.${styles_selectors_js_2.default.root}`, token_group_1.default);
        return (tokenGroup === null || tokenGroup === void 0 ? void 0 : tokenGroup.findTokens()) || [];
    }
    findTrigger() {
        return this.findByClassName(styles_selectors_js_4.default['button-trigger']);
    }
}
exports.default = MultiselectWrapper;
MultiselectWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map