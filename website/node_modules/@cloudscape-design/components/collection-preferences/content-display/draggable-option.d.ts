import React from 'react';
import { OptionWithVisibility } from './utils';
export default function DraggableOption({ dragHandleAriaLabel, onKeyDown, onToggle, option, }: {
    dragHandleAriaLabel?: string;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    onToggle: (option: OptionWithVisibility) => void;
    option: OptionWithVisibility;
}): JSX.Element;
//# sourceMappingURL=draggable-option.d.ts.map