import { AreaChartProps } from '../interfaces';
import { RefObject } from 'react';
import { XDomain, XScaleType, YDomain, YScaleType } from '../../internal/components/cartesian-chart/interfaces';
import { ChartModel } from './index';
export interface UseChartModelProps<T extends AreaChartProps.DataTypes> {
    fitHeight?: boolean;
    externalSeries: readonly AreaChartProps.Series<T>[];
    visibleSeries: readonly AreaChartProps.Series<T>[];
    setVisibleSeries: (series: readonly AreaChartProps.Series<T>[]) => void;
    highlightedSeries: null | AreaChartProps.Series<T>;
    setHighlightedSeries: (series: null | AreaChartProps.Series<T>) => void;
    xDomain?: XDomain<T>;
    yDomain?: YDomain;
    xScaleType: XScaleType;
    yScaleType: YScaleType;
    height: number;
    width: number;
    popoverRef: RefObject<HTMLElement>;
}
export default function useChartModel<T extends AreaChartProps.DataTypes>({ fitHeight, externalSeries: allSeries, visibleSeries: series, setVisibleSeries, highlightedSeries, setHighlightedSeries, xDomain, yDomain, xScaleType, yScaleType, height: explicitHeight, width, popoverRef, }: UseChartModelProps<T>): ChartModel<T>;
//# sourceMappingURL=use-chart-model.d.ts.map