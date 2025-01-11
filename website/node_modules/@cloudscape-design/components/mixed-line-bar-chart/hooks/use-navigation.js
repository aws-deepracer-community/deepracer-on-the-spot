// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useMemo, useState } from 'react';
import { KeyCode } from '../../internal/keycode';
import { findNavigableSeries, isXThreshold, isYThreshold, nextValidDomainIndex } from '../utils';
export function useNavigation({ series, visibleSeries, scaledSeries, barGroups, xScale, yScale, highlightedPoint, highlightedGroupIndex, highlightedSeries, isHandlersDisabled, pinPopover, highlightSeries, highlightGroup, highlightPoint, highlightX, verticalMarkerX, }) {
    const [targetX, setTargetX] = useState(null);
    const [xIndex, setXIndex] = useState(0);
    // There are two different types of navigation:
    // 1) Group navigation for any chart that contains a bar series
    // 2) Line navigation for any chart that only contains lines and thresholds
    const isGroupNavigation = useMemo(() => visibleSeries.some(({ series }) => series.type === 'bar'), [visibleSeries]);
    // Make a list of series that can be navigated between. Bar series are treated as one.
    const { navigableSeries } = useMemo(() => findNavigableSeries(visibleSeries), [visibleSeries]);
    const containsMultipleSeries = navigableSeries.length > 1;
    const onBarGroupFocus = () => {
        const groupIndex = highlightedGroupIndex !== null && highlightedGroupIndex !== void 0 ? highlightedGroupIndex : 0;
        setTargetX(xScale.domain[groupIndex]);
        highlightGroup(groupIndex);
    };
    const onLineFocus = () => {
        if (verticalMarkerX === null) {
            if (containsMultipleSeries) {
                moveToLineGroupIndex(0);
            }
            else {
                moveBetweenSeries(0);
            }
        }
    };
    const onFocus = () => {
        if (isGroupNavigation) {
            onBarGroupFocus();
        }
        else {
            onLineFocus();
        }
    };
    // Returns all the unique X coordinates in scaledSeries.
    // Assumes scaledSeries is sorted by `x`.
    const allUniqueX = useMemo(() => {
        const result = [];
        for (let i = 0; i < scaledSeries.length; i += 1) {
            const point = scaledSeries[i];
            if (point !== undefined && (!result.length || result[result.length - 1].scaledX !== point.x)) {
                result.push({ scaledX: point.x, datum: point.datum });
            }
        }
        return result;
    }, [scaledSeries]);
    const moveBetweenSeries = useCallback((direction) => {
        var _a, _b, _c, _d;
        if (isGroupNavigation) {
            return;
        }
        const xOffset = xScale.isCategorical() ? Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2 : 0;
        const MAX_SERIES_INDEX = navigableSeries.length - 1;
        // Find the index of the currently highlighted series (if any)
        let previousSeriesIndex = -1;
        if (highlightedSeries) {
            previousSeriesIndex = navigableSeries.indexOf(highlightedSeries);
        }
        // Move forwards or backwards to the new series
        // If index === -1, show all data points from all series at the given X instead of one single series
        const firstPossibleIndex = containsMultipleSeries ? -1 : 0;
        let nextSeriesIndex = 0;
        if (previousSeriesIndex !== null) {
            nextSeriesIndex = previousSeriesIndex + direction;
            if (nextSeriesIndex > MAX_SERIES_INDEX) {
                nextSeriesIndex = firstPossibleIndex;
            }
            else if (nextSeriesIndex < firstPossibleIndex) {
                nextSeriesIndex = MAX_SERIES_INDEX;
            }
        }
        if (nextSeriesIndex === -1) {
            highlightSeries(null);
            highlightPoint(null);
            return;
        }
        const nextSeries = navigableSeries[nextSeriesIndex];
        const nextInternalSeries = series.filter(({ series }) => series === nextSeries)[0];
        // 2. Find point in the next series
        let targetXPoint = ((_a = xScale.d3Scale(targetX)) !== null && _a !== void 0 ? _a : NaN) + xOffset;
        if (!isFinite(targetXPoint)) {
            targetXPoint = 0;
        }
        if (nextSeries.type === 'line') {
            const nextScaledSeries = scaledSeries.filter(it => it.series === nextSeries);
            const closestNextSeriesPoint = nextScaledSeries.reduce((prev, curr) => (Math.abs(curr.x - targetXPoint) < Math.abs(prev.x - targetXPoint) ? curr : prev), { x: -Infinity, y: -Infinity });
            highlightPoint(Object.assign(Object.assign({}, closestNextSeriesPoint), { color: nextInternalSeries.color, series: nextSeries }));
        }
        else if (isYThreshold(nextSeries)) {
            const scaledTargetIndex = scaledSeries.map(it => { var _a; return ((_a = it.datum) === null || _a === void 0 ? void 0 : _a.x) || null; }).indexOf(targetX);
            highlightPoint({
                x: targetXPoint,
                y: (_b = yScale.d3Scale(nextSeries.y)) !== null && _b !== void 0 ? _b : NaN,
                color: nextInternalSeries.color,
                series: nextSeries,
                datum: (_c = scaledSeries[scaledTargetIndex]) === null || _c === void 0 ? void 0 : _c.datum,
            });
        }
        else if (isXThreshold(nextSeries)) {
            highlightPoint({
                x: (_d = xScale.d3Scale(nextSeries.x)) !== null && _d !== void 0 ? _d : NaN,
                y: yScale.d3Scale.range()[0],
                color: nextInternalSeries.color,
                series: nextSeries,
                datum: { x: nextSeries.x, y: NaN },
            });
        }
    }, [
        isGroupNavigation,
        xScale,
        navigableSeries,
        highlightedSeries,
        containsMultipleSeries,
        highlightSeries,
        highlightPoint,
        series,
        targetX,
        scaledSeries,
        yScale,
    ]);
    const moveWithinSeries = useCallback((direction) => {
        var _a;
        const series = highlightedSeries || visibleSeries[0].series;
        if (series.type === 'line' || isYThreshold(series)) {
            const targetScaledSeries = scaledSeries.filter(it => it.series === series);
            const previousPoint = highlightedPoint || targetScaledSeries[0];
            const indexOfPreviousPoint = targetScaledSeries.map(it => it.x).indexOf(previousPoint.x);
            const nextPointIndex = circleIndex(indexOfPreviousPoint + direction, [0, targetScaledSeries.length - 1]);
            const nextPoint = targetScaledSeries[nextPointIndex];
            setTargetX(((_a = nextPoint.datum) === null || _a === void 0 ? void 0 : _a.x) || null);
            setXIndex(nextPointIndex);
            highlightPoint(nextPoint);
        }
        else if (series.type === 'bar') {
            const xDomain = xScale.domain;
            const MAX_GROUP_INDEX = xDomain.length - 1;
            let nextGroupIndex = 0;
            if (highlightedGroupIndex !== null) {
                // find next group
                nextGroupIndex = highlightedGroupIndex + direction;
                if (nextGroupIndex > MAX_GROUP_INDEX) {
                    nextGroupIndex = 0;
                }
                else if (nextGroupIndex < 0) {
                    nextGroupIndex = MAX_GROUP_INDEX;
                }
            }
            const nextDomainIndex = nextValidDomainIndex(nextGroupIndex, barGroups, direction);
            setTargetX(xDomain[nextDomainIndex]);
            highlightGroup(nextDomainIndex);
        }
    }, [
        highlightedSeries,
        visibleSeries,
        scaledSeries,
        highlightedPoint,
        highlightPoint,
        xScale.domain,
        highlightedGroupIndex,
        barGroups,
        highlightGroup,
    ]);
    const moveToLineGroupIndex = useCallback((index) => {
        var _a, _b, _c, _d;
        const point = allUniqueX[index];
        setXIndex(index);
        setTargetX(((_a = point.datum) === null || _a === void 0 ? void 0 : _a.x) || null);
        highlightX({ scaledX: (_b = point === null || point === void 0 ? void 0 : point.scaledX) !== null && _b !== void 0 ? _b : null, label: (_d = (_c = point.datum) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : null });
    }, [allUniqueX, highlightX]);
    const moveWithinXAxis = useCallback((direction) => {
        if (highlightedSeries || isGroupNavigation) {
            moveWithinSeries(direction);
        }
        else {
            const nextPointGroupIndex = circleIndex(xIndex + direction, [0, allUniqueX.length - 1]);
            moveToLineGroupIndex(nextPointGroupIndex);
        }
    }, [highlightedSeries, isGroupNavigation, moveWithinSeries, xIndex, allUniqueX.length, moveToLineGroupIndex]);
    const onKeyDown = useCallback((event) => {
        const keyCode = event.keyCode;
        if (keyCode !== KeyCode.up &&
            keyCode !== KeyCode.right &&
            keyCode !== KeyCode.down &&
            keyCode !== KeyCode.left &&
            keyCode !== KeyCode.space &&
            keyCode !== KeyCode.enter) {
            return;
        }
        event.preventDefault();
        if (isHandlersDisabled) {
            return;
        }
        if (keyCode === KeyCode.down || keyCode === KeyCode.up) {
            moveBetweenSeries(keyCode === KeyCode.down ? 1 : -1);
        }
        else if (keyCode === KeyCode.left || keyCode === KeyCode.right) {
            moveWithinXAxis(keyCode === KeyCode.right ? 1 : -1);
        }
        else if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
            pinPopover();
        }
    }, [isHandlersDisabled, moveBetweenSeries, moveWithinXAxis, pinPopover]);
    return { isGroupNavigation, onFocus, onKeyDown, xIndex };
}
// Returns given index if it is in range or the opposite range boundary otherwise.
function circleIndex(index, [from, to]) {
    if (index < from) {
        return to;
    }
    if (index > to) {
        return from;
    }
    return index;
}
//# sourceMappingURL=use-navigation.js.map