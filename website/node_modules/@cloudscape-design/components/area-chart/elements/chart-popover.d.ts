import React from 'react';
import { AreaChartProps } from '../interfaces';
import { ChartModel } from '../model';
import { HighlightDetails } from './use-highlight-details';
export default function AreaChartPopover<T extends AreaChartProps.DataTypes>({ model, highlightDetails, dismissAriaLabel, footer, size, onBlur, }: {
    model: ChartModel<T>;
    highlightDetails: null | HighlightDetails;
    dismissAriaLabel?: string;
    footer?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    onBlur?: (event: React.FocusEvent) => void;
}): JSX.Element | null;
//# sourceMappingURL=chart-popover.d.ts.map