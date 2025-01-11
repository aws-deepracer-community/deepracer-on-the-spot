// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef } from 'react';
import styles from './styles.css.js';
import clsx from 'clsx';
const CONTENT_MIN_HEIGHT_BOUNDARY = 40;
export const CartesianChartContainer = forwardRef(({ minHeight, fitHeight, leftAxisLabel, leftAxisLabelMeasure, bottomAxisLabel, chartPlot, popover, }, ref) => {
    if (fitHeight) {
        return (React.createElement("div", { className: clsx(styles['chart-container'], styles['fit-height']), ref: ref },
            leftAxisLabel,
            React.createElement("div", { className: clsx(styles['chart-container-outer'], styles['fit-height']) },
                leftAxisLabelMeasure,
                React.createElement("div", { className: styles['chart-container-inner'] },
                    React.createElement("div", { className: clsx(styles['chart-container-plot-wrapper'], styles['fit-height']), style: { minHeight: Math.max(minHeight, CONTENT_MIN_HEIGHT_BOUNDARY) } },
                        React.createElement("div", { className: clsx(styles['chart-container-plot'], styles['fit-height']) }, chartPlot)),
                    React.createElement("div", { className: clsx(styles['chart-container-bottom-labels'], styles['fit-height']) }, bottomAxisLabel)),
                popover)));
    }
    return (React.createElement("div", { className: styles['chart-container'], ref: ref },
        leftAxisLabel,
        React.createElement("div", { className: styles['chart-container-outer'] },
            leftAxisLabelMeasure,
            React.createElement("div", { className: styles['chart-container-inner'] },
                chartPlot,
                bottomAxisLabel),
            popover)));
});
//# sourceMappingURL=chart-container.js.map