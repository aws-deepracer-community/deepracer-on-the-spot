/// <reference types="react" />
import { ScaledBarGroup } from '../make-scaled-bar-groups';
import { ScaledPoint } from '../make-scaled-series';
import { ChartPlotRef } from '../../internal/components/chart-plot';
import { VerticalMarkerX } from '../interfaces';
export interface UseMouseHoverProps<T> {
    plotRef: React.RefObject<ChartPlotRef>;
    popoverRef: React.RefObject<HTMLElement>;
    scaledSeries: ReadonlyArray<ScaledPoint<T>>;
    barGroups: ScaledBarGroup<T>[];
    highlightPoint: (point: ScaledPoint<T> | null) => void;
    highlightGroup: (groupIndex: number) => void;
    clearHighlightedSeries: () => void;
    isGroupNavigation: boolean;
    isHandlersDisabled: boolean;
    highlightX: (verticalMarker: VerticalMarkerX<T> | null) => void;
}
export declare function useMouseHover<T>({ plotRef, popoverRef, scaledSeries, barGroups, highlightPoint, highlightGroup, clearHighlightedSeries, isGroupNavigation, isHandlersDisabled, highlightX, }: UseMouseHoverProps<T>): {
    onSVGMouseMove: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
    onSVGMouseOut: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
    onPopoverLeave: (event: React.MouseEvent) => void;
};
//# sourceMappingURL=use-mouse-hover.d.ts.map