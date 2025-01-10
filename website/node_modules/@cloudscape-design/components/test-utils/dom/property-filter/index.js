"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_selectors_js_1 = require("../../../property-filter/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/token-list/styles.selectors.js");
const styles_selectors_js_3 = require("../../../text-filter/styles.selectors.js");
const autosuggest_1 = require("../autosuggest");
const filtering_token_1 = require("../internal/filtering-token");
class PropertyFilterWrapper extends autosuggest_1.default {
    findResultsCount() {
        return this.findByClassName(styles_selectors_js_3.default.results);
    }
    findTokens() {
        return this.findAllByClassName(filtering_token_1.default.rootSelector).map((elementWrapper) => new filtering_token_1.default(elementWrapper.getElement()));
    }
    /**
     * Returns the button that toggles if the tokens above `tokenLimit` are visible.
     */
    findTokenToggle() {
        return this.findByClassName(styles_selectors_js_2.default.toggle);
    }
    /**
     * Returns the button that removes all current tokens.
     */
    findRemoveAllButton() {
        return this.findByClassName(styles_selectors_js_1.default['remove-all']);
    }
    /**
     * Returns the element containing the `customControl` slot.
     */
    findCustomControl() {
        return this.findByClassName(styles_selectors_js_1.default['custom-control']);
    }
    /**
     * Returns the element containing the `customFilterActions` slot.
     */
    findCustomFilterActions() {
        return this.findByClassName(styles_selectors_js_1.default['custom-filter-actions']);
    }
}
exports.default = PropertyFilterWrapper;
PropertyFilterWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map