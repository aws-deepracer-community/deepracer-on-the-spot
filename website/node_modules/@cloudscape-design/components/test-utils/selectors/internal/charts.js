"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const chart_legend_1 = require("./chart-legend");
const chart_filter_1 = require("./chart-filter");
const chart_popover_1 = require("./chart-popover");
const styles_selectors_js_1 = require("../../../internal/components/chart-legend/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/chart-filter/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/chart-popover/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/chart-status-container/styles.selectors.js");
class CommonChartWrapper extends selectors_1.ComponentWrapper {
    findDefaultFilter() {
        return this.findComponent(`.${styles_selectors_js_2.default['chart-filter']}`, chart_filter_1.default);
    }
    findStatusContainer() {
        return this.findByClassName(styles_selectors_js_4.default.root);
    }
    findLegend() {
        return this.findComponent(`.${styles_selectors_js_1.default.root}`, chart_legend_1.default);
    }
    findDetailPopover() {
        return this.findComponent(`.${styles_selectors_js_3.default.root}`, chart_popover_1.default);
    }
}
exports.default = CommonChartWrapper;
//# sourceMappingURL=charts.js.map