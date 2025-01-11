"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const charts_1 = require("../internal/charts");
const styles_selectors_js_1 = require("../../../pie-chart/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/chart-wrapper/styles.selectors.js");
class PieChartWrapper extends charts_1.default {
    findFilterContainer() {
        return this.findByClassName(styles_selectors_js_3.default['filter-container']);
    }
    findSegments() {
        return this.findAllByClassName(styles_selectors_js_1.default.segment);
    }
    findHighlightedSegment() {
        return this.findByClassName(styles_selectors_js_1.default['segment--highlighted']);
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
    findInnerContent() {
        return this.findByClassName(styles_selectors_js_1.default['inner-content']);
    }
    findSegmentLabels() {
        return this.findAllByClassName(styles_selectors_js_1.default.label);
    }
    findHighlightedSegmentLabel() {
        return this.findByClassName(styles_selectors_js_1.default['label--highlighted']);
    }
}
exports.default = PieChartWrapper;
PieChartWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map