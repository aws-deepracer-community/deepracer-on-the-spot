"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_selectors_js_1 = require("../../../area-chart/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
const index_js_1 = require("../mixed-line-bar-chart/index.js");
class AreaChartWrapper extends index_js_1.BaseCartesianChartWrapper {
    findChart() {
        return this.findByClassName(styles_selectors_js_2.default.root);
    }
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    findSeries() {
        return this.findAllByClassName(styles_selectors_js_1.default.series);
    }
    findHighlightedSeries() {
        return this.findByClassName(styles_selectors_js_1.default['series--highlighted']);
    }
}
exports.default = AreaChartWrapper;
AreaChartWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map