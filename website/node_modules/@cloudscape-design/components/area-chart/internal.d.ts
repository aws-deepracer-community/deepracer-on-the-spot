/// <reference types="react" />
import { AreaChartProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { SomeRequired } from '../internal/types';
type InternalAreaChartProps<T extends AreaChartProps.DataTypes> = SomeRequired<AreaChartProps<T>, 'height' | 'xScaleType' | 'yScaleType' | 'statusType' | 'detailPopoverSize' | 'i18nStrings'> & InternalBaseComponentProps;
export default function InternalAreaChart<T extends AreaChartProps.DataTypes>({ fitHeight, height, xScaleType, yScaleType, xDomain, yDomain, xTickFormatter, yTickFormatter, detailTotalFormatter, highlightedSeries: controlledHighlightedSeries, visibleSeries: controlledVisibleSeries, series: externalSeries, onFilterChange: controlledOnVisibleChange, onHighlightChange: controlledOnHighlightChange, i18nStrings, ariaLabel, ariaLabelledby, ariaDescription, xTitle, yTitle, hideFilter, additionalFilters, hideLegend, legendTitle, statusType, detailPopoverSize, detailPopoverFooter, empty, noMatch, errorText, loadingText, recoveryText, onRecoveryClick, __internalRootRef, ...props }: InternalAreaChartProps<T>): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map