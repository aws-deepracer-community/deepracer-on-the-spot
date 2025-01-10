"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../button-dropdown/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../button-dropdown/item-element/styles.selectors.js");
const styles_selectors_js_4 = require("../../../button-dropdown/category-elements/styles.selectors.js");
const styles_selectors_js_5 = require("../../../button/styles.selectors.js");
const index_js_1 = require("../button/index.js");
class ButtonDropdownWrapper extends selectors_1.ComponentWrapper {
    findNativeButton() {
        return this.findByClassName(styles_selectors_js_1.default['dropdown-trigger']).findByClassName(styles_selectors_js_1.default['test-utils-button-trigger']);
    }
    findMainAction() {
        var _a, _b;
        return (_b = (_a = this.findByClassName(styles_selectors_js_1.default['split-trigger'])) === null || _a === void 0 ? void 0 : _a.findComponent(`.${styles_selectors_js_5.default.button}`, index_js_1.default)) !== null && _b !== void 0 ? _b : null;
    }
    findOpenDropdown() {
        return (0, selectors_1.createWrapper)().find(`.${styles_selectors_js_2.default.dropdown}[data-open=true]`);
    }
    /**
     * Finds an item in the open dropdown by item id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findItemById(id) {
        var _a;
        const itemSelector = `.${styles_selectors_js_3.default['item-element']}[data-testid="${id}"]`;
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(itemSelector)) || this.find(itemSelector);
    }
    /**
     * Finds an expandable category in the open dropdown by category id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findExpandableCategoryById(id) {
        var _a;
        const expandableCategorySelector = `.${styles_selectors_js_4.default.expandable}[data-testid="${id}"]`;
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(expandableCategorySelector)) || this.find(expandableCategorySelector);
    }
    /**
     * Finds the highlighted item in the open dropdown. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findHighlightedItem() {
        var _a;
        const highlightedItemSelector = `.${styles_selectors_js_3.default['item-element']}.${styles_selectors_js_3.default.highlighted}`;
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(highlightedItemSelector)) || this.find(highlightedItemSelector);
    }
    /**
     * Finds all the items in the open dropdown. Returns empty array if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findItems() {
        var _a;
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.findAll(`.${styles_selectors_js_3.default['item-element']}`)) || [];
    }
    /**
     * Finds the disabled reason tooltip. Returns null if no disabled item with `disabledReason` is highlighted.
     */
    findDisabledReason() {
        return (0, selectors_1.createWrapper)().find(`[data-testid="button-dropdown-disabled-reason"]`);
    }
}
exports.default = ButtonDropdownWrapper;
ButtonDropdownWrapper.rootSelector = styles_selectors_js_1.default['button-dropdown'];
//# sourceMappingURL=index.js.map