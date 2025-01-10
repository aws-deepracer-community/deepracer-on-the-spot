/// <reference types="react" />
import { AreaChartProps } from './interfaces';
import { ChartModel } from './model';
interface ChartContainerProps<T extends AreaChartProps.DataTypes> extends Pick<AreaChartProps<T>, 'xTitle' | 'yTitle' | 'xTickFormatter' | 'yTickFormatter' | 'detailTotalFormatter' | 'detailPopoverSize' | 'detailPopoverFooter' | 'ariaLabel' | 'ariaLabelledby' | 'ariaDescription' | 'i18nStrings'> {
    model: ChartModel<T>;
    autoWidth: (value: number) => void;
    fitHeight?: boolean;
    minHeight: number;
}
declare const _default: typeof ChartContainer;
export default _default;
declare function ChartContainer<T extends AreaChartProps.DataTypes>({ model, autoWidth, xTitle, yTitle, detailPopoverSize, detailPopoverFooter, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings: { xTickFormatter: deprecatedXTickFormatter, yTickFormatter: deprecatedYTickFormatter, detailTotalFormatter: deprecatedDetailTotalFormatter, detailTotalLabel, chartAriaRoleDescription, xAxisAriaRoleDescription, yAxisAriaRoleDescription, detailPopoverDismissAriaLabel, }, fitHeight, minHeight, xTickFormatter, yTickFormatter, detailTotalFormatter, }: ChartContainerProps<T>): JSX.Element;
//# sourceMappingURL=chart-container.d.ts.map