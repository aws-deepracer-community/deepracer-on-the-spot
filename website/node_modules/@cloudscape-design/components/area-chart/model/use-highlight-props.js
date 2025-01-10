// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect } from 'react';
import { fireNonCancelableEvent } from '../../internal/events';
import { useControllable } from '../../internal/hooks/use-controllable';
// Provides controlled or uncontrolled props to highlight chart elements.
export default function useHighlightProps(series, controlledHighlightedSeries, controlledOnHighlightChange) {
    const [highlightedSeries = null, setHighlightedSeries] = useControllable(controlledHighlightedSeries, controlledOnHighlightChange, null, {
        componentName: 'AreaChart',
        controlledProp: 'highlightedSeries',
        changeHandler: 'onHighlightChange',
    });
    const notifyHighlightedSeries = useCallback((s) => {
        fireNonCancelableEvent(controlledOnHighlightChange, { highlightedSeries: s });
    }, [controlledOnHighlightChange]);
    // Reset highlights if series change.
    useEffect(() => {
        if (controlledHighlightedSeries) {
            const highlightedSeriesIndex = series.indexOf(controlledHighlightedSeries);
            if (highlightedSeriesIndex === -1) {
                setHighlightedSeries(null);
                notifyHighlightedSeries(null);
            }
        }
    }, [series, controlledHighlightedSeries, setHighlightedSeries, notifyHighlightedSeries]);
    return [highlightedSeries, notifyHighlightedSeries];
}
//# sourceMappingURL=use-highlight-props.js.map