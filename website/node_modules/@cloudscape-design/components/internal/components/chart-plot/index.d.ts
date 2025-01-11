import React from 'react';
import { Offset } from '../interfaces';
export interface ChartPlotRef {
    svg: SVGSVGElement;
    focusPlot(): void;
    focusApplication(): void;
}
export interface ChartPlotProps {
    width: number | string;
    height: number | string;
    transform?: string;
    offsetTop?: number;
    offsetBottom?: number;
    offsetLeft?: number;
    offsetRight?: number;
    focusOffset?: number;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescription?: string;
    ariaDescribedby?: string;
    ariaRoleDescription?: string;
    activeElementKey?: null | string | number | boolean;
    activeElementRef?: React.RefObject<SVGGElement>;
    activeElementFocusOffset?: Offset;
    ariaLiveRegion?: string;
    isClickable?: boolean;
    isPrecise?: boolean;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
    onMouseMove?: (event: React.MouseEvent<SVGSVGElement>) => void;
    onMouseOut?: (event: React.MouseEvent<SVGSVGElement>) => void;
    onApplicationFocus?: (event: React.FocusEvent<SVGGElement>, trigger: 'mouse' | 'keyboard') => void;
    onApplicationBlur?: (event: React.FocusEvent<SVGGElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<SVGGElement>) => void;
    children: React.ReactNode;
}
/**
  An extension for the SVG to be used for charts. It includes a controller element to
  handle the focus and keyboard interactions in a way that is supported by screen readers.

  The application mimics the aria-activedescendant behavior which is unsupported by Safari. The
  activeElementRef is the pointer to the secondary-focus element and activeElementKey denotes when
  the focus transition was made.

  Alternatively, ariaLiveRegion can be used to make announcements.
*/
declare const _default: React.ForwardRefExoticComponent<ChartPlotProps & React.RefAttributes<ChartPlotRef>>;
export default _default;
//# sourceMappingURL=index.d.ts.map