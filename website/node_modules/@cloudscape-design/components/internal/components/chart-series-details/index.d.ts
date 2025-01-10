import React, { ReactNode } from 'react';
import { BaseComponentProps } from '../../base-component';
import { ChartSeriesMarkerType } from '../chart-series-marker';
interface ChartDetailPair {
    key: ReactNode;
    value: ReactNode;
}
export interface ChartSeriesDetailItem extends ChartDetailPair {
    markerType?: ChartSeriesMarkerType;
    color?: string;
    isDimmed?: boolean;
    subItems?: ReadonlyArray<ChartDetailPair>;
    expandableId?: string;
}
export type ExpandedSeries = Set<string>;
export interface ChartSeriesDetailsProps extends BaseComponentProps {
    details: ReadonlyArray<ChartSeriesDetailItem>;
    expandedSeries?: ExpandedSeries;
    setPopoverText?: (s: string) => void;
    setExpandedState?: (seriesTitle: string, state: boolean) => void;
    compactList?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChartSeriesDetailsProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
//# sourceMappingURL=index.d.ts.map