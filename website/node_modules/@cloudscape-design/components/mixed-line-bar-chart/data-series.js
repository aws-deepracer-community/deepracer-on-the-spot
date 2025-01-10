// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import clsx from 'clsx';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import LineSeries from './line-series';
import BarSeries from './bar-series';
import styles from './styles.css.js';
import { calculateOffsetMaps } from './utils';
// Should have the same value as the `border-line-chart-width` token.
const STROKE_WIDTH = 2;
export default function DataSeries({ axis, plotHeight, plotWidth, highlightedGroupIndex, highlightedSeries, stackedBars, isGroupNavigation, visibleSeries, xScale, yScale, }) {
    const chartAreaClipPath = useUniqueId('awsui-mixed-line-bar-chart__chart-area-');
    // Lines get a small extra space at the top and bottom to account for the strokes when they are at the edge of the graph.
    const lineAreaClipPath = useUniqueId('awsui-line-chart__chart-area-');
    const stackedBarOffsetMaps = useMemo(() => {
        if (!stackedBars) {
            return [];
        }
        const barData = [];
        visibleSeries.forEach(({ series }) => {
            if (series.type === 'bar') {
                barData.push(series.data);
            }
        });
        return calculateOffsetMaps(barData);
    }, [visibleSeries, stackedBars]);
    return (React.createElement(React.Fragment, null,
        React.createElement("defs", { "aria-hidden": "true" },
            React.createElement("clipPath", { id: chartAreaClipPath },
                React.createElement("rect", { x: 0, y: 0, width: plotWidth, height: plotHeight })),
            React.createElement("clipPath", { id: lineAreaClipPath },
                React.createElement("rect", { x: 0, y: -STROKE_WIDTH / 2, width: plotWidth, height: plotHeight + STROKE_WIDTH }))),
        React.createElement("g", { "aria-hidden": isGroupNavigation ? true : undefined, role: "group" }, visibleSeries.map(({ series, color }, index) => {
            const isHighlighted = series === highlightedSeries;
            const isDimmed = !!highlightedSeries && !isHighlighted;
            switch (series.type) {
                case 'line':
                case 'threshold': {
                    return (React.createElement("g", { key: index, role: "group", "aria-label": series.title, className: clsx(styles.series, styles[`series--${series.type}`], {
                            [styles['series--highlighted']]: isHighlighted,
                            [styles['series--dimmed']]: isDimmed,
                        }) },
                        React.createElement(LineSeries, { axis: axis, series: series, color: color, xScale: xScale, yScale: yScale, chartAreaClipPath: lineAreaClipPath })));
                }
                case 'bar':
                    return (React.createElement(BarSeries, { key: index, axis: axis, series: series, color: color, totalSeriesCount: visibleSeries.filter(s => s.series.type === 'bar').length, seriesIndex: index, xScale: xScale, yScale: yScale, plotSize: axis === 'y' ? plotWidth : plotHeight, highlighted: isHighlighted, dimmed: isDimmed, chartAreaClipPath: chartAreaClipPath, stackedBarOffsets: stackedBarOffsetMaps[index], highlightedGroupIndex: highlightedGroupIndex }));
            }
        }))));
}
//# sourceMappingURL=data-series.js.map