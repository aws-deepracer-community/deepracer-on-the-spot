import React from 'react';
import { BaseComponentProps } from '../../base-component/index.js';
interface ChartWrapperProps extends BaseComponentProps {
    fitHeight: boolean;
    defaultFilter: React.ReactNode;
    additionalFilters: React.ReactNode;
    reserveFilterSpace: boolean;
    reserveLegendSpace: boolean;
    chartStatus: React.ReactNode;
    chart: React.ReactNode;
    legend: React.ReactNode;
    onBlur?(event: React.FocusEvent): void;
    contentClassName?: string;
    contentMinHeight?: number;
}
export declare const ChartWrapper: React.ForwardRefExoticComponent<ChartWrapperProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=index.d.ts.map