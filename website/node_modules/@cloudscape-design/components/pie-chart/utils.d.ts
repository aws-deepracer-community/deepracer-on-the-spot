import { ComponentFormatFunction } from '../i18n/context';
import { PieChartProps } from './interfaces';
export interface Dimension {
    innerRadius: number;
    outerRadius: number;
    padding: number;
    paddingLabels: number;
    innerLabelPadding: number;
    cornerRadius?: number;
}
export declare const minLabelLineAngularPadding: number;
export declare const dimensionsBySize: Record<NonNullable<PieChartProps['size']>, Dimension>;
export declare const refreshDimensionsBySize: Record<NonNullable<PieChartProps['size']>, Dimension>;
/**
 * When `size` is a string ("small", "medium" or "large") the predefined pie chart element dimensions for classic and visual refresh are used.
 * When `size` is a number the outer and inner radii are computed and the rest of the dimensions are taken from the closest predefined size.
 */
export declare function getDimensionsBySize({ size, hasLabels, visualRefresh, }: {
    size: NonNullable<PieChartProps['size']> | number;
    hasLabels: boolean;
    visualRefresh?: boolean;
}): Dimension & {
    size: NonNullable<PieChartProps['size']>;
};
export declare const defaultDetails: (i18n: ComponentFormatFunction<'pie-chart'>, i18nStrings: PieChartProps.I18nStrings) => (datum: PieChartProps.Datum, dataSum: number) => ({
    key: string;
    value: number;
} | {
    key: string;
    value: string;
})[];
/**
 * Adjusts the position of the given label nodes to avoid visual overlapping.
 * @param nodes List of label nodes of the entire chart (both left and right side)
 * @param markers Markers array that was calculated in <Labels>, but we just need the `endY` values
 * @param leftSide Boolean flag whether we are processing the left or right side of the chart labels
 */
export declare const balanceLabelNodes: (nodes: NodeListOf<SVGGElement>, markers: Array<{
    endY: number;
    endX: number;
}>, leftSide: boolean, radius: number) => void;
export declare const computeSmartAngle: (startAngle: number, endAngle: number, optimize?: boolean) => number;
//# sourceMappingURL=utils.d.ts.map