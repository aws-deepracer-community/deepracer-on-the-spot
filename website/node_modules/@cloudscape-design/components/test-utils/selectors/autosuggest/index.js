"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalAutosuggestDropdownWrapper = exports.AutosuggestDropdownWrapper = void 0;
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const input_1 = require("../input");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const option_1 = require("../internal/option");
const options_list_1 = require("../internal/options-list");
const dropdown_1 = require("../internal/dropdown");
const styles_selectors_js_1 = require("../../../autosuggest/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/selectable-item/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_5 = require("../../../internal/components/option/styles.selectors.js");
const styles_selectors_js_6 = require("../../../internal/components/dropdown/styles.selectors.js");
class AutosuggestDropdownWrapper extends selectors_1.ComponentWrapper {
    findOptions() {
        return this.findAll(`.${styles_selectors_js_3.default['selectable-item']}[data-test-index]`).map((elementWrapper) => new option_1.default(elementWrapper.getElement()));
    }
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex) {
        return this.findComponent(`.${styles_selectors_js_3.default['selectable-item']}[data-test-index="${optionIndex}"]`, option_1.default);
    }
    /**
     * Returns an option from the autosuggest by it's value
     *
     * @param value The 'value' of the option.
     */
    findOptionByValue(value) {
        const toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(`.${option_1.default.rootSelector}[data-value="${toReplace}"]`, option_1.default);
    }
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex, optionIndex) {
        return this.findComponent(`.${styles_selectors_js_3.default['selectable-item']}[data-group-index="${groupIndex}"][data-in-group-index="${optionIndex}"]`, option_1.default);
    }
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer() {
        return this.findByClassName(options_list_1.default.rootSelector);
    }
    findFooterRegion() {
        return this.findByClassName(styles_selectors_js_4.default.root);
    }
    findOpenDropdown() {
        // Autosuggest always has a dropdown
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    }
    findHighlightedOption() {
        return this.findComponent(`.${styles_selectors_js_3.default.highlighted}`, option_1.default);
    }
    /**
     * Returns all the selected options.
     */
    findDisabledOptions() {
        return this.findAllByClassName(styles_selectors_js_3.default.disabled).map((elementWrapper) => new option_1.default(elementWrapper.getElement()));
    }
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches() {
        return this.findAllByClassName(styles_selectors_js_5.default['filtering-match-highlight']);
    }
    findHighlightedAriaLiveRegion() {
        return this.find('[aria-live]');
    }
}
exports.AutosuggestDropdownWrapper = AutosuggestDropdownWrapper;
class PortalAutosuggestDropdownWrapper extends AutosuggestDropdownWrapper {
    findOpenDropdown() {
        return (0, selectors_1.createWrapper)().find(`.${styles_selectors_js_6.default.dropdown}[data-open=true]`);
    }
}
exports.PortalAutosuggestDropdownWrapper = PortalAutosuggestDropdownWrapper;
class AutosuggestWrapper extends input_1.default {
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options = {
        expandToViewport: false
    }) {
        return options.expandToViewport ? (0, selectors_1.createWrapper)().findComponent(`.${styles_selectors_js_6.default.dropdown}[data-open=true]`, PortalAutosuggestDropdownWrapper) : new AutosuggestDropdownWrapper(this.getElement());
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findStatusIndicator(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findByClassName(styles_selectors_js_2.default.root);
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findByClassName(styles_selectors_js_4.default.recovery);
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findEnteredTextOption(options = {
        expandToViewport: false
    }) {
        return this.findDropdown(options).findByClassName(styles_selectors_js_3.default['has-background']);
    }
}
exports.default = AutosuggestWrapper;
AutosuggestWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map