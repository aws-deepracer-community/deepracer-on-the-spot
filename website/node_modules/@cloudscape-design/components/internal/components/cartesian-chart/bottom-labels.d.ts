import React from 'react';
import { ChartDataTypes } from './interfaces';
import { ChartScale, NumericChartScale } from './scales';
import { FormattedTick } from './label-utils';
interface BottomLabelsProps {
    axis?: 'x' | 'y';
    width: number;
    height: number;
    scale: ChartScale | NumericChartScale;
    title?: string;
    ariaRoleDescription?: string;
    offsetLeft?: number;
    offsetRight?: number;
    virtualTextRef: React.Ref<SVGTextElement>;
    formattedTicks: readonly FormattedTick[];
}
export declare function useBottomLabels({ ticks, scale, tickFormatter, }: {
    scale: ChartScale | NumericChartScale;
    ticks: readonly ChartDataTypes[];
    tickFormatter?: (value: ChartDataTypes) => string;
}): {
    virtualTextRef: React.RefObject<SVGTextElement>;
    formattedTicks: FormattedTick[];
    height: number;
};
declare const _default: typeof BottomLabels;
export default _default;
declare function BottomLabels({ axis, width, height, scale, title, ariaRoleDescription, offsetLeft, offsetRight, virtualTextRef, formattedTicks, }: BottomLabelsProps): JSX.Element;
//# sourceMappingURL=bottom-labels.d.ts.map