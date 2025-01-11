import React from 'react';
import { ChartContainerProps } from '../chart-container';
import { ChartDataTypes, MixedLineBarChartProps, VerticalMarkerX } from '../interfaces';
import { ChartScale, NumericChartScale } from '../../internal/components/cartesian-chart/scales';
import { ScaledPoint } from '../make-scaled-series';
import { ScaledBarGroup } from '../make-scaled-bar-groups';
export type UseNavigationProps<T extends ChartDataTypes> = Pick<ChartContainerProps<T>, 'highlightedSeries' | 'series' | 'visibleSeries'> & {
    xScale: ChartScale;
    yScale: NumericChartScale;
    barGroups: ScaledBarGroup<T>[];
    scaledSeries: ReadonlyArray<ScaledPoint<T>>;
    highlightedPoint: ScaledPoint<T> | null;
    highlightedGroupIndex: number | null;
    isHandlersDisabled: boolean;
    pinPopover(pinned?: boolean): void;
    highlightSeries(series: MixedLineBarChartProps.ChartSeries<T> | null): void;
    highlightGroup(groupIndex: number): void;
    highlightPoint(point: ScaledPoint<T> | null): void;
    highlightX: (verticalMarker: VerticalMarkerX<T> | null) => void;
    clearHighlightedSeries(): void;
    verticalMarkerX: VerticalMarkerX<T> | null;
};
export declare function useNavigation<T extends ChartDataTypes>({ series, visibleSeries, scaledSeries, barGroups, xScale, yScale, highlightedPoint, highlightedGroupIndex, highlightedSeries, isHandlersDisabled, pinPopover, highlightSeries, highlightGroup, highlightPoint, highlightX, verticalMarkerX, }: UseNavigationProps<T>): {
    isGroupNavigation: boolean;
    onFocus: () => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    xIndex: number;
};
//# sourceMappingURL=use-navigation.d.ts.map