import React from 'react';
import { PieArcDatum } from 'd3-shape';
import { PieChartProps } from './interfaces';
import { Dimension } from './utils';
import { InternalChartDatum } from './pie-chart';
interface SegmentsProps<T> {
    pieData: Array<PieArcDatum<InternalChartDatum<T>>>;
    highlightedSegment: T | null;
    dimensions: Dimension;
    variant: PieChartProps['variant'];
    focusedSegmentRef: React.RefObject<SVGGElement>;
    popoverTrackRef: React.RefObject<SVGCircleElement>;
    segmentAriaRoleDescription?: string;
    onMouseDown: (datum: InternalChartDatum<T>) => void;
    onMouseOver: (datum: InternalChartDatum<T>) => void;
}
export default function Segments<T extends PieChartProps.Datum>({ pieData, highlightedSegment, dimensions, variant, focusedSegmentRef, popoverTrackRef, segmentAriaRoleDescription, onMouseDown, onMouseOver, }: SegmentsProps<T>): JSX.Element;
export {};
//# sourceMappingURL=segments.d.ts.map