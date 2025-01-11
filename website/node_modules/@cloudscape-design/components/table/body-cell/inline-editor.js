import { __awaiter } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../button/internal';
import FormField from '../../form-field/internal';
import SpaceBetween from '../../space-between/internal';
import { useClickAway } from './click-away';
import styles from './styles.css.js';
import FocusLock from '../../internal/components/focus-lock';
import LiveRegion from '../../internal/components/live-region';
import { useInternalI18n } from '../../i18n/context';
// A function that does nothing
const noop = () => undefined;
export function InlineEditor({ ariaLabels, item, column, onEditEnd, submitEdit, __onRender, }) {
    var _a, _b, _c, _d;
    const [currentEditLoading, setCurrentEditLoading] = useState(false);
    const [currentEditValue, setCurrentEditValue] = useState();
    const i18n = useInternalI18n('table');
    const focusLockRef = useRef(null);
    const cellContext = {
        currentValue: currentEditValue,
        setValue: setCurrentEditValue,
    };
    function finishEdit({ cancelled = false, refocusCell = true } = {}) {
        if (!cancelled) {
            setCurrentEditValue(undefined);
        }
        onEditEnd({ cancelled, refocusCell: refocusCell });
    }
    function onSubmitClick(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            if (currentEditValue === undefined) {
                finishEdit();
                return;
            }
            setCurrentEditLoading(true);
            try {
                yield submitEdit(item, column, currentEditValue);
                setCurrentEditLoading(false);
                finishEdit();
            }
            catch (e) {
                setCurrentEditLoading(false);
                (_a = focusLockRef.current) === null || _a === void 0 ? void 0 : _a.focusFirst();
            }
        });
    }
    function onCancel({ reFocusEditedCell = true } = {}) {
        if (currentEditLoading) {
            return;
        }
        finishEdit({ cancelled: true, refocusCell: reFocusEditedCell });
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            onCancel();
        }
    }
    const clickAwayRef = useClickAway(() => onCancel({ reFocusEditedCell: false }));
    useEffect(() => {
        if (__onRender) {
            const timer = setTimeout(__onRender, 1);
            return () => clearTimeout(timer);
        }
    }, [__onRender]);
    // asserting non-undefined editConfig here because this component is unreachable otherwise
    const { ariaLabel = undefined, validation = noop, errorIconAriaLabel, constraintText, editingCell, } = column.editConfig;
    return (React.createElement(FocusLock, { restoreFocus: true, ref: focusLockRef },
        React.createElement("div", { role: "dialog", ref: clickAwayRef, "aria-label": (_a = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.activateEditLabel) === null || _a === void 0 ? void 0 : _a.call(ariaLabels, column, item), onKeyDown: handleEscape },
            React.createElement("form", { onSubmit: onSubmitClick, className: styles['body-cell-editor-form'] },
                React.createElement(FormField, { stretch: true, label: ariaLabel, constraintText: constraintText, __hideLabel: true, __disableGutters: true, i18nStrings: { errorIconAriaLabel }, errorText: validation(item, currentEditValue) },
                    React.createElement("div", { className: styles['body-cell-editor-row'] },
                        editingCell(item, cellContext),
                        React.createElement("span", { className: styles['body-cell-editor-controls'] },
                            React.createElement(SpaceBetween, { direction: "horizontal", size: "xxs" },
                                !currentEditLoading ? (React.createElement(Button, { ariaLabel: (_b = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.cancelEditLabel) === null || _b === void 0 ? void 0 : _b.call(ariaLabels, column), formAction: "none", iconName: "close", variant: "inline-icon", onClick: () => onCancel() })) : null,
                                React.createElement(Button, { ariaLabel: (_c = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.submitEditLabel) === null || _c === void 0 ? void 0 : _c.call(ariaLabels, column), formAction: "submit", iconName: "check", variant: "inline-icon", loading: currentEditLoading })),
                            React.createElement(LiveRegion, null, currentEditLoading
                                ? i18n('ariaLabels.submittingEditText', (_d = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.submittingEditText) === null || _d === void 0 ? void 0 : _d.call(ariaLabels, column))
                                : ''))))))));
}
//# sourceMappingURL=inline-editor.js.map