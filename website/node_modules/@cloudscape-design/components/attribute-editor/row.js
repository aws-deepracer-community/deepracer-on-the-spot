// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import InternalBox from '../box/internal';
import styles from './styles.css.js';
import React, { useCallback } from 'react';
import InternalFormField from '../form-field/internal';
import InternalColumnLayout from '../column-layout/internal';
import { fireNonCancelableEvent } from '../internal/events';
import InternalGrid from '../grid/internal';
import { InternalButton } from '../button/internal';
import clsx from 'clsx';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { useInternalI18n } from '../i18n/context';
const Divider = () => React.createElement(InternalBox, { className: styles.divider, padding: { top: 'l' } });
function render(item, itemIndex, slot) {
    if (isSlotFunction(slot)) {
        return slot(item, itemIndex);
    }
    return slot;
    function isSlotFunction(slot) {
        return typeof slot === 'function';
    }
}
const GRID_DEFINITION = [{ colspan: { default: 12, xs: 9 } }];
const REMOVABLE_GRID_DEFINITION = [{ colspan: { default: 12, xs: 9 } }, { colspan: { default: 12, xs: 3 } }];
export const Row = React.memo(({ breakpoint, item, definition, i18nStrings = {}, index, removable, removeButtonText, removeButtonRefs, onRemoveButtonClick, removeButtonAriaLabel, }) => {
    var _a;
    const i18n = useInternalI18n('attribute-editor');
    const isNarrowViewport = breakpoint === 'default' || breakpoint === 'xxs';
    const isWideViewport = !isNarrowViewport;
    const handleRemoveClick = useCallback(() => {
        fireNonCancelableEvent(onRemoveButtonClick, { itemIndex: index });
    }, [onRemoveButtonClick, index]);
    const firstControlId = useUniqueId('first-control-id-');
    return (React.createElement(InternalBox, { className: styles.row, margin: { bottom: 's' } },
        React.createElement("div", { role: "group", "aria-labelledby": `${firstControlId}-label ${firstControlId}` },
            React.createElement(InternalGrid, { __breakpoint: breakpoint, gridDefinition: removable ? REMOVABLE_GRID_DEFINITION : GRID_DEFINITION },
                React.createElement(InternalColumnLayout, { className: styles['row-control'], columns: definition.length, __breakpoint: breakpoint }, definition.map(({ info, label, constraintText, errorText, control }, defIndex) => (React.createElement(InternalFormField, { key: defIndex, className: styles.field, label: label, info: info, constraintText: render(item, index, constraintText), errorText: render(item, index, errorText), stretch: true, i18nStrings: { errorIconAriaLabel: i18nStrings.errorIconAriaLabel }, __hideLabel: isWideViewport && index > 0, controlId: defIndex === 0 ? firstControlId : undefined }, render(item, index, control))))),
                removable && (React.createElement(ButtonContainer, { index: index, isNarrowViewport: isNarrowViewport, hasLabel: definition.some(row => row.label) },
                    React.createElement(InternalButton, { className: styles['remove-button'], formAction: "none", ref: ref => {
                            removeButtonRefs[index] = ref !== null && ref !== void 0 ? ref : undefined;
                        }, ariaLabel: (_a = (removeButtonAriaLabel !== null && removeButtonAriaLabel !== void 0 ? removeButtonAriaLabel : i18nStrings.removeButtonAriaLabel)) === null || _a === void 0 ? void 0 : _a(item), onClick: handleRemoveClick }, i18n('removeButtonText', removeButtonText)))))),
        isNarrowViewport && React.createElement(Divider, null)));
});
const ButtonContainer = ({ index, children, isNarrowViewport, hasLabel }) => (React.createElement("div", { className: clsx({
        [styles['button-container-haslabel']]: !isNarrowViewport && index === 0 && hasLabel,
        [styles['button-container-nolabel']]: !isNarrowViewport && index === 0 && !hasLabel,
        [styles['right-align']]: isNarrowViewport,
    }) }, children));
//# sourceMappingURL=row.js.map