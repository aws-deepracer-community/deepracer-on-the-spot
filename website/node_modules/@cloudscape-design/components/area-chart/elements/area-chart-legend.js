// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useMemo } from 'react';
import ChartLegend from '../../internal/components/chart-legend';
import { useSelector } from '../async-store';
export default memo(AreaChartLegend);
function AreaChartLegend({ model, legendTitle, ariaLabel, plotContainerRef, }) {
    const legendItems = useMemo(() => model.series.map(s => {
        const { title, color, markerType } = model.getInternalSeries(s);
        return { label: title, color, type: markerType, datum: s };
    }), [model]);
    const legendSeries = useSelector(model.interactions, state => state.legendSeries);
    return (React.createElement(ChartLegend, { series: legendItems, highlightedSeries: legendSeries, onHighlightChange: model.handlers.onLegendHighlight, legendTitle: legendTitle, ariaLabel: ariaLabel, plotContainerRef: plotContainerRef }));
}
//# sourceMappingURL=area-chart-legend.js.map