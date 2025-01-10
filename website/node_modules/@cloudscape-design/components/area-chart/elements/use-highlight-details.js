// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useSelector } from '../async-store';
import { useInternalI18n } from '../../i18n/context';
export default function useHighlightDetails({ model, xTickFormatter, yTickFormatter, detailTotalFormatter, detailTotalLabel, }) {
    const i18n = useInternalI18n('area-chart');
    const hX = useSelector(model.interactions, state => state.highlightedX);
    const hPoint = useSelector(model.interactions, state => state.highlightedPoint);
    const isPopoverPinned = useSelector(model.interactions, state => state.isPopoverPinned);
    if (!hX) {
        return null;
    }
    const [firstPoint] = hX;
    const highlightIndex = firstPoint.index.x;
    const seriesPoints = [...model.computed.plot.xs[highlightIndex]];
    const detailsTotal = seriesPoints.reduce((total, point) => total + point.value, 0);
    const formattedX = xTickFormatter ? xTickFormatter(firstPoint.x) : firstPoint.x.toString();
    const seriesTitle = hPoint ? getInternalSeries(hPoint).title : '';
    const formattedY = hPoint ? getInternalSeries(hPoint).formatValue(hPoint.value, hPoint.x) : '';
    const seriesDetails = seriesPoints.map(point => {
        const { title, formatValue, color, markerType } = getInternalSeries(point);
        const isDimmed = Boolean(hPoint) && point !== hPoint;
        return { key: title, value: formatValue(point.value, point.x), color, markerType, isDimmed };
    });
    const totalDetails = [
        {
            key: i18n('i18nStrings.detailTotalLabel', detailTotalLabel) || '',
            value: detailTotalFormatter
                ? detailTotalFormatter(detailsTotal)
                : yTickFormatter
                    ? yTickFormatter(detailsTotal)
                    : detailsTotal,
        },
    ];
    const pointDetails = hPoint ? seriesDetails[hPoint.index.s] : null;
    const activeLabel = `${seriesTitle} ${formattedX} ${formattedY}, ${totalDetails[0].key} ${totalDetails[0].value}`;
    return {
        isPopoverPinned,
        highlightIndex,
        formattedX,
        seriesTitle,
        formattedY,
        activeLabel,
        seriesDetails,
        totalDetails,
        pointDetails,
    };
    function getInternalSeries(point) {
        return model.getInternalSeries(model.series[point.index.s]);
    }
}
//# sourceMappingURL=use-highlight-details.js.map