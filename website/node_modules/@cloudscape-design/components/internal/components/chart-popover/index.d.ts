import React from 'react';
import { PopoverProps } from '../../../popover/interfaces';
export interface ChartPopoverProps extends PopoverProps {
    /** Title of the popover */
    title?: React.ReactNode;
    /** References the element the container is positioned against. */
    trackRef: React.RefObject<HTMLElement | SVGElement>;
    /**
      Used to update the container position in case track or track position changes:
      
      const trackRef = useRef<Element>(null)
      return (<>
        <Track style={getPosition(selectedItemId)} ref={trackRef} />
        <PopoverContainer trackRef={trackRef} trackKey={selectedItemId} .../>
      </>)
    */
    trackKey?: string | number;
    /** Optional container element that prevents any clicks in there from dismissing the popover */
    container: Element | null;
    /** Event that is fired when the popover is dismissed */
    onDismiss: (outsideClick?: boolean) => void;
    /** Fired when the pointer enters the hoverable area around the popover */
    onMouseEnter?: (event: React.MouseEvent) => void;
    /** Fired when the pointer leaves the hoverable area around the popover */
    onMouseLeave?: (event: React.MouseEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
    /** Popover content */
    children?: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<ChartPopoverProps & React.RefAttributes<HTMLElement>>;
export default _default;
//# sourceMappingURL=index.d.ts.map