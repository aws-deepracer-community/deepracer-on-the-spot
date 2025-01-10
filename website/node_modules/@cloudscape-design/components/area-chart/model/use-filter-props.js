// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect } from 'react';
import { fireNonCancelableEvent } from '../../internal/events';
import { useControllable } from '../../internal/hooks/use-controllable';
// Provides controlled or uncontrolled props to filter chart series.
export default function useFilterProps(series, controlledVisibleSeries, controlledOnVisibleChange) {
    const [visibleSeries = [], setVisibleSeriesState] = useControllable(controlledVisibleSeries, controlledOnVisibleChange, series, {
        componentName: 'AreaChart',
        controlledProp: 'visibleSeries',
        changeHandler: 'onFilterChange',
    });
    const setVisibleSeries = useCallback((selectedSeries) => {
        setVisibleSeriesState(selectedSeries);
        fireNonCancelableEvent(controlledOnVisibleChange, { visibleSeries: selectedSeries });
    }, [controlledOnVisibleChange, setVisibleSeriesState]);
    // Reset filter if series change.
    useEffect(() => {
        const newVisibleSeries = visibleSeries.filter(s => series.indexOf(s) !== -1);
        if (newVisibleSeries.length !== visibleSeries.length) {
            setVisibleSeries(newVisibleSeries);
        }
    }, [series, visibleSeries, setVisibleSeries]);
    return [visibleSeries, setVisibleSeries];
}
//# sourceMappingURL=use-filter-props.js.map