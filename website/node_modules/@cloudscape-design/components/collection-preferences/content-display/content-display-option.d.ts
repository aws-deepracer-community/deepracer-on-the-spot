import React from 'react';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { OptionWithVisibility } from './utils';
export declare const getClassName: (suffix?: string) => string;
export interface ContentDisplayOptionProps {
    dragHandleAriaLabel?: string;
    listeners?: SyntheticListenerMap;
    onToggle?: (option: OptionWithVisibility) => void;
    option: OptionWithVisibility;
}
declare const ContentDisplayOption: React.ForwardRefExoticComponent<ContentDisplayOptionProps & React.RefAttributes<HTMLDivElement>>;
export default ContentDisplayOption;
//# sourceMappingURL=content-display-option.d.ts.map