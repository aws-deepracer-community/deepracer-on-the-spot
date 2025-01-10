"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dropdown_host_1 = require("../internal/dropdown-host");
const styles_selectors_js_1 = require("../../../internal/components/chart-filter/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/button-trigger/styles.selectors.js");
const styles_selectors_js_3 = require("../../../select/parts/styles.selectors.js");
class ChartFilterWrapper extends dropdown_host_1.default {
    findPlaceholder() {
        return this.findByClassName(styles_selectors_js_3.default.placeholder);
    }
    findTrigger() {
        return this.findByClassName(styles_selectors_js_2.default['button-trigger']);
    }
}
exports.default = ChartFilterWrapper;
ChartFilterWrapper.rootSelector = styles_selectors_js_1.default['chart-filter'];
//# sourceMappingURL=chart-filter.js.map