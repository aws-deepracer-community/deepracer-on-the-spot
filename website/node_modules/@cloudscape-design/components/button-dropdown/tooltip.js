// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef, useState } from 'react';
import Arrow from '../popover/arrow';
import PopoverContainer from '../popover/container';
import PopoverBody from '../popover/body';
import Portal from '../internal/components/portal';
import { usePortalModeClasses } from '../internal/hooks/use-portal-mode-classes';
import { useReducedMotion } from '@cloudscape-design/component-toolkit/internal';
const DEFAULT_OPEN_TIMEOUT_IN_MS = 120;
export default function Tooltip({ children, content, position = 'right' }) {
    const ref = useRef(null);
    const isReducedMotion = useReducedMotion(ref);
    const { open, triggerProps } = useTooltipOpen(isReducedMotion ? 0 : DEFAULT_OPEN_TIMEOUT_IN_MS);
    const portalClasses = usePortalModeClasses(ref);
    return (React.createElement("span", Object.assign({ ref: ref }, triggerProps),
        children,
        open && (React.createElement(Portal, null,
            React.createElement("span", { className: portalClasses },
                React.createElement(PopoverContainer, { size: "small", fixedWidth: false, position: position, trackRef: ref, arrow: position => React.createElement(Arrow, { position: position }), renderWithPortal: true, zIndex: 7000 },
                    React.createElement(PopoverBody, { dismissButton: false, dismissAriaLabel: undefined, header: null, onDismiss: () => { }, overflowVisible: "both" },
                        React.createElement("span", { "data-testid": "button-dropdown-disabled-reason", role: "tooltip" }, content))))))));
}
function useTooltipOpen(timeout) {
    const handle = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        clearTimeout(handle.current);
        setIsOpen(false);
    };
    const open = () => setIsOpen(true);
    const openDelayed = () => {
        handle.current = setTimeout(open, timeout);
    };
    const onKeyDown = e => {
        if (isOpen && isEscape(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            close();
        }
    };
    const onFocus = openDelayed;
    const onBlur = close;
    return {
        open: isOpen,
        triggerProps: {
            onBlur,
            onFocus,
            onKeyDown,
        },
    };
}
const isEscape = (key) => key === 'Escape' || key === 'Esc';
//# sourceMappingURL=tooltip.js.map