// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import ChartFilter from '../../internal/components/chart-filter';
export default memo(AreaChartFilter);
function AreaChartFilter({ model, filterLabel, filterPlaceholder, filterSelectedAriaLabel, }) {
    const filterItems = model.allSeries.map(s => {
        const { title, color, markerType } = model.getInternalSeries(s);
        return { label: title, color, type: markerType, datum: s };
    });
    return (React.createElement(ChartFilter, { series: filterItems, onChange: model.handlers.onFilterSeries, selectedSeries: model.series, i18nStrings: {
            filterLabel,
            filterPlaceholder,
            filterSelectedAriaLabel,
        } }));
}
//# sourceMappingURL=area-chart-filter.js.map