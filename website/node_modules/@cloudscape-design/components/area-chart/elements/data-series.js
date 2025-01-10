// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import AreaSeries from './area-series';
import ThresholdSeries from './threshold-series';
import styles from '../styles.css.js';
import { useSelector } from '../async-store';
export default memo(DataSeries);
function DataSeries({ model }) {
    const chartAreaClipPath = useUniqueId('awsui-area-chart__chart-area-');
    const highlightedX = useSelector(model.interactions, state => state.highlightedX);
    const highlightedSeries = useSelector(model.interactions, state => state.highlightedSeries);
    const useHighlightDimmed = !highlightedX;
    // Iterating series in the reversed order so that SVG paths overlap correctly.
    const seriesData = [];
    for (let seriesIndex = model.series.length - 1; seriesIndex >= 0; seriesIndex--) {
        if (model.computed.plot.sx[seriesIndex]) {
            seriesData.push([model.series[seriesIndex], model.computed.plot.sx[seriesIndex] || []]);
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("defs", { "aria-hidden": "true" },
            React.createElement("clipPath", { id: chartAreaClipPath },
                React.createElement("rect", { x: 0, y: 0, width: model.width, height: model.height }))),
        React.createElement("g", { role: "group" }, seriesData.map(([series, data]) => {
            const isHighlighted = series === highlightedSeries;
            const isDimmed = !!highlightedSeries && !isHighlighted;
            return (React.createElement("g", { key: series.title, role: "group", "aria-label": series.title, className: clsx(styles.series, styles[`series--${series.type}`], {
                    [styles['series--highlighted']]: isHighlighted,
                    [styles['series--dimmed']]: useHighlightDimmed && isDimmed,
                }) }, series.type === 'area' ? (React.createElement(AreaSeries, { data: data, color: model.getInternalSeries(series).color, chartAreaClipPath: chartAreaClipPath })) : (React.createElement(ThresholdSeries, { data: data, xScale: model.computed.xScale, color: model.getInternalSeries(series).color, chartAreaClipPath: chartAreaClipPath }))));
        }))));
}
//# sourceMappingURL=data-series.js.map