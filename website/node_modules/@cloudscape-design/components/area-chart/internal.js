import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { isDevelopment } from '../internal/is-development';
import { getBaseProps } from '../internal/base-component';
import ChartStatusContainer, { getChartStatus } from '../internal/components/chart-status-container';
import AreaChartFilter from './elements/area-chart-filter';
import AreaChartLegend from './elements/area-chart-legend';
import ChartContainer from './chart-container';
import styles from './styles.css.js';
import useChartModel from './model/use-chart-model';
import useFilterProps from './model/use-filter-props';
import useHighlightProps from './model/use-highlight-props';
import { isSeriesValid } from './model/utils';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { nodeBelongs } from '../internal/utils/node-belongs';
import { ChartWrapper } from '../internal/components/chart-wrapper';
export default function InternalAreaChart(_a) {
    var { fitHeight, height, xScaleType, yScaleType, xDomain, yDomain, xTickFormatter, yTickFormatter, detailTotalFormatter, highlightedSeries: controlledHighlightedSeries, visibleSeries: controlledVisibleSeries, series: externalSeries, onFilterChange: controlledOnVisibleChange, onHighlightChange: controlledOnHighlightChange, i18nStrings, ariaLabel, ariaLabelledby, ariaDescription, xTitle, yTitle, hideFilter, additionalFilters, hideLegend, legendTitle, statusType, detailPopoverSize, detailPopoverFooter, empty, noMatch, errorText, loadingText, recoveryText, onRecoveryClick, __internalRootRef = null } = _a, props = __rest(_a, ["fitHeight", "height", "xScaleType", "yScaleType", "xDomain", "yDomain", "xTickFormatter", "yTickFormatter", "detailTotalFormatter", "highlightedSeries", "visibleSeries", "series", "onFilterChange", "onHighlightChange", "i18nStrings", "ariaLabel", "ariaLabelledby", "ariaDescription", "xTitle", "yTitle", "hideFilter", "additionalFilters", "hideLegend", "legendTitle", "statusType", "detailPopoverSize", "detailPopoverFooter", "empty", "noMatch", "errorText", "loadingText", "recoveryText", "onRecoveryClick", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const containerRef = useRef(null);
    const popoverRef = useRef(null);
    if (isDevelopment) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!isSeriesValid(externalSeries)) {
                warnOnce('AreaChart', "The `series` property violates the component's constraints: all `area` " +
                    'series must have `data` arrays of the same length and with the same x-values.');
            }
        }, [externalSeries]);
    }
    const [width, setWidth] = useState(0);
    const [visibleSeries, setVisibleSeries] = useFilterProps(externalSeries, controlledVisibleSeries, controlledOnVisibleChange);
    const [highlightedSeries, setHighlightedSeries] = useHighlightProps(externalSeries, controlledHighlightedSeries, controlledOnHighlightChange);
    const model = useChartModel({
        fitHeight,
        externalSeries,
        visibleSeries,
        setVisibleSeries,
        highlightedSeries,
        setHighlightedSeries,
        xDomain,
        yDomain,
        xScaleType,
        yScaleType,
        height,
        width,
        popoverRef,
    });
    const { isEmpty, isNoMatch, showChart } = getChartStatus({
        externalData: externalSeries,
        visibleData: visibleSeries,
        statusType,
    });
    const showFilters = statusType === 'finished' && (!isEmpty || isNoMatch) && (additionalFilters || !hideFilter);
    const showLegend = !hideLegend && !isEmpty && statusType === 'finished';
    const reserveLegendSpace = !showChart && !hideLegend;
    const reserveFilterSpace = !showChart && !isNoMatch && (!hideFilter || additionalFilters);
    useEffect(() => {
        const onKeyDown = model.handlers.onDocumentKeyDown;
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [model.handlers.onDocumentKeyDown]);
    const onBlur = (event) => {
        if (event.relatedTarget && !nodeBelongs(containerRef.current, event.relatedTarget)) {
            model.handlers.onContainerBlur();
        }
    };
    const mergedRef = useMergeRefs(containerRef, __internalRootRef);
    return (React.createElement(ChartWrapper, Object.assign({ ref: mergedRef }, baseProps, { className: clsx(baseProps.className, styles.root), fitHeight: !!fitHeight, contentMinHeight: height, defaultFilter: showFilters && !hideFilter ? (React.createElement(AreaChartFilter, { model: model, filterLabel: i18nStrings.filterLabel, filterPlaceholder: i18nStrings.filterPlaceholder, filterSelectedAriaLabel: i18nStrings.filterSelectedAriaLabel })) : null, additionalFilters: showFilters ? additionalFilters : null, reserveFilterSpace: !!reserveFilterSpace, reserveLegendSpace: !!reserveLegendSpace, chartStatus: React.createElement(ChartStatusContainer, { isEmpty: isEmpty, isNoMatch: isNoMatch, showChart: showChart, statusType: statusType, empty: empty, noMatch: noMatch, loadingText: loadingText, errorText: errorText, recoveryText: recoveryText, onRecoveryClick: onRecoveryClick }), chart: showChart ? (React.createElement(ChartContainer, { model: model, autoWidth: setWidth, detailPopoverSize: detailPopoverSize, detailPopoverFooter: detailPopoverFooter, xTitle: xTitle, yTitle: yTitle, xTickFormatter: xTickFormatter, yTickFormatter: yTickFormatter, detailTotalFormatter: detailTotalFormatter, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, i18nStrings: i18nStrings, fitHeight: fitHeight, minHeight: height })) : null, legend: showLegend ? (React.createElement(AreaChartLegend, { plotContainerRef: containerRef, model: model, legendTitle: legendTitle, ariaLabel: i18nStrings.legendAriaLabel })) : null, onBlur: onBlur })));
}
//# sourceMappingURL=internal.js.map