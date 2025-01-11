"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCartesianChartWrapper = void 0;
const charts_1 = require("../internal/charts");
const styles_selectors_js_1 = require("../../../mixed-line-bar-chart/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/cartesian-chart/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/chart-wrapper/styles.selectors.js");
class BaseCartesianChartWrapper extends charts_1.default {
    findFilterContainer() {
        return this.findByClassName(styles_selectors_js_4.default['filter-container']);
    }
    findChart() {
        return this.findByClassName(styles_selectors_js_2.default.root);
    }
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    findApplication() {
        return this.findByClassName(styles_selectors_js_2.default.application);
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
    findXAxisTitle() {
        return this.findByClassName(styles_selectors_js_3.default['axis-label--x']);
    }
    findYAxisTitle() {
        return this.findByClassName(styles_selectors_js_3.default['axis-label--y']);
    }
    findXTicks() {
        return this.findAllByClassName(styles_selectors_js_3.default['ticks--x']);
    }
    findYTicks() {
        return this.findAllByClassName(styles_selectors_js_3.default['ticks--y']);
    }
}
exports.BaseCartesianChartWrapper = BaseCartesianChartWrapper;
class MixedLineBarChartWrapper extends BaseCartesianChartWrapper {
    /**
     * Returns an array of bar groups, which are used for mouse navigation if a chart contains bar series.
     */
    findBarGroups() {
        return this.findAllByClassName(styles_selectors_js_1.default['bar-group']);
    }
}
exports.default = MixedLineBarChartWrapper;
MixedLineBarChartWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map