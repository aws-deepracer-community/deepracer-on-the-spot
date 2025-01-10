// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import createCategoryColorScale from '../../internal/utils/create-category-color-scale';
export default function createSeriesDecorator(externalSeries) {
    const colorScale = createCategoryColorScale(externalSeries, s => s.type === 'threshold', s => s.color || null);
    const decorateSeries = (s, index) => {
        const title = s.title;
        const color = colorScale[index];
        const markerType = s.type === 'area' ? 'hollow-rectangle' : 'dashed';
        const formatValue = s.type === 'threshold'
            ? () => (s.valueFormatter ? s.valueFormatter(s.y) : s.y)
            : (y, x) => (s.valueFormatter ? s.valueFormatter(y, x) : y);
        return { series: s, title, color, markerType, formatValue };
    };
    // Map external series to internal ones.
    const mapping = externalSeries.reduce((map, series, index) => {
        map.set(series, decorateSeries(series, index));
        return map;
    }, new Map());
    // It is inconvenient to use internal series everywhere, that's
    // why we also provide a decorator function to get the internal series on demand.
    const seriesDecorator = (series) => mapping.get(series) || decorateSeries(series, externalSeries.length);
    return seriesDecorator;
}
//# sourceMappingURL=create-series-decorator.js.map