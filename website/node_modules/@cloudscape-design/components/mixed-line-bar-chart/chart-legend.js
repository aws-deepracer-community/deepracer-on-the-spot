// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import ChartLegend from '../internal/components/chart-legend';
import { chartLegendMap } from './utils';
export default function InternalChartLegend({ series, visibleSeries, highlightedSeries, onHighlightChange, legendTitle, ariaLabel, plotContainerRef, }) {
    const legendItems = useMemo(() => {
        return series
            .filter(s => visibleSeries.indexOf(s.series) !== -1)
            .map(({ series, color }) => ({
            label: series.title,
            type: chartLegendMap[series.type],
            color,
            datum: series,
        }));
    }, [series, visibleSeries]);
    return (React.createElement(ChartLegend, { series: legendItems, highlightedSeries: highlightedSeries || null, onHighlightChange: onHighlightChange, legendTitle: legendTitle, ariaLabel: ariaLabel, plotContainerRef: plotContainerRef }));
}
//# sourceMappingURL=chart-legend.js.map