// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import RadioButton from '../radio-group/radio-button';
import styles from './styles.css.js';
import { fireNonCancelableEvent } from '../internal/events';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
export const Tile = React.forwardRef(({ item, selected, name, breakpoint, onChange }, forwardedRef) => {
    const internalRef = useRef(null);
    const isVisualRefresh = useVisualRefresh();
    const mergedRef = useMergeRefs(internalRef, forwardedRef);
    return (React.createElement("div", { className: clsx(styles['tile-container'], { [styles['has-metadata']]: item.description || item.image }, { [styles.selected]: selected }, { [styles.disabled]: !!item.disabled }, { [styles.refresh]: isVisualRefresh }, styles[`breakpoint-${breakpoint}`]), "data-value": item.value, onClick: () => {
            var _a;
            if (item.disabled) {
                return;
            }
            (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            if (!selected) {
                fireNonCancelableEvent(onChange, { value: item.value });
            }
        } },
        React.createElement("div", { className: clsx(styles.control, { [styles['no-image']]: !item.image }) },
            React.createElement(RadioButton, { checked: selected, ref: mergedRef, name: name, value: item.value, label: item.label, description: item.description, disabled: item.disabled, controlId: item.controlId })),
        item.image && React.createElement("div", { className: clsx(styles.image, { [styles.disabled]: !!item.disabled }) }, item.image)));
});
//# sourceMappingURL=tile.js.map