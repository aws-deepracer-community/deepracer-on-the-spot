import { AreaChartProps } from '../interfaces';
import { ChartScale, NumericChartScale } from '../../internal/components/cartesian-chart/scales';
import { ChartDataTypes, XDomain, YDomain, YScaleType } from '../../internal/components/cartesian-chart/interfaces';
import { ChartModel } from './index';
export declare function computeDomainX<T extends ChartDataTypes>(series: readonly AreaChartProps.Series<T>[]): XDomain<T>;
export declare function computeDomainY<T>(series: readonly AreaChartProps.Series<T>[], scaleType: YScaleType): YDomain;
export declare function computePlotPoints<T>(series: readonly AreaChartProps.Series<T>[], xScale: ChartScale, yScale: NumericChartScale): {
    xy: ChartModel.PlotPoint<T>[][];
    xs: ChartModel.PlotPoint<T>[][];
    sx: ChartModel.PlotPoint<T>[][];
};
export declare function findClosest<T>(sortedArray: readonly T[], target: number, getter: (item: T) => number): T;
export declare function circleIndex(index: number, [from, to]: [number, number]): number;
export declare function isSeriesValid<T>(series: readonly AreaChartProps.Series<T>[]): boolean;
//# sourceMappingURL=utils.d.ts.map