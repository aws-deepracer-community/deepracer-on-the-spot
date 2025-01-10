import React from 'react';
import { ButtonDropdownProps, ButtonDropdownSettings, GroupToggle, HighlightProps, ItemActivate } from '../interfaces';
import { CancelableEventHandler } from '../../internal/events';
interface UseButtonDropdownOptions extends ButtonDropdownSettings {
    items: ButtonDropdownProps.Items;
    onItemClick?: CancelableEventHandler<ButtonDropdownProps.ItemClickDetails>;
    onItemFollow?: CancelableEventHandler<ButtonDropdownProps.ItemClickDetails>;
    onReturnFocus: () => void;
    expandToViewport?: boolean;
}
interface UseButtonDropdownApi extends HighlightProps {
    isOpen: boolean;
    onKeyDown: (event: React.KeyboardEvent) => void;
    onKeyUp: (event: React.KeyboardEvent) => void;
    onItemActivate: ItemActivate;
    onGroupToggle: GroupToggle;
    toggleDropdown: (options?: {
        moveHighlightOnOpen?: boolean;
    }) => void;
    closeDropdown: () => void;
    setIsUsingMouse: (isUsingMouse: boolean) => void;
}
export declare function useButtonDropdown({ items, onItemClick, onItemFollow, onReturnFocus, hasExpandableGroups, isInRestrictedView, expandToViewport, }: UseButtonDropdownOptions): UseButtonDropdownApi;
export {};
//# sourceMappingURL=use-button-dropdown.d.ts.map