// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import Calendar from './calendar';
import { InternalButton } from '../button/internal';
import FocusLock from '../internal/components/focus-lock';
import InternalBox from '../box/internal';
import InternalSpaceBetween from '../space-between/internal';
import styles from './styles.css.js';
import RelativeRangePicker from './relative-range';
import ModeSwitcher from './mode-switcher';
import clsx from 'clsx';
import InternalAlert from '../alert/internal';
import LiveRegion from '../internal/components/live-region';
import { getDefaultMode, joinAbsoluteValue, splitAbsoluteValue } from './utils';
import { useInternalI18n } from '../i18n/context';
export const VALID_RANGE = { valid: true };
export function DateRangePickerDropdown({ locale = '', startOfWeek, isDateEnabled, isValidRange, value, onClear: clearValue, onApply: applyValue, onDropdownClose, relativeOptions, showClearButton, isSingleGrid, i18nStrings, dateOnly, timeInputFormat, rangeSelectorMode, ariaLabelledby, ariaDescribedby, customAbsoluteRangeControl, }) {
    const i18n = useInternalI18n('date-range-picker');
    const [rangeSelectionMode, setRangeSelectionMode] = useState(getDefaultMode(value, relativeOptions, rangeSelectorMode));
    const [selectedAbsoluteRange, setSelectedAbsoluteRange] = useState(() => splitAbsoluteValue((value === null || value === void 0 ? void 0 : value.type) === 'absolute' ? value : null));
    const [selectedRelativeRange, setSelectedRelativeRange] = useState((value === null || value === void 0 ? void 0 : value.type) === 'relative' ? value : null);
    const scrollableContainerRef = useRef(null);
    const applyButtonRef = useRef(null);
    const [applyClicked, setApplyClicked] = useState(false);
    const [validationResult, setValidationResult] = useState(VALID_RANGE);
    const closeDropdown = () => {
        setApplyClicked(false);
        onDropdownClose();
    };
    const onClear = () => {
        closeDropdown();
        clearValue();
    };
    const onApply = () => {
        const newValue = rangeSelectionMode === 'relative' ? selectedRelativeRange : joinAbsoluteValue(selectedAbsoluteRange);
        const newValidationResult = applyValue(newValue);
        if (newValidationResult.valid === false) {
            setApplyClicked(true);
            setValidationResult(newValidationResult);
        }
        else {
            setApplyClicked(false);
            closeDropdown();
        }
    };
    useEffect(() => {
        if (applyClicked) {
            const visibleRange = rangeSelectionMode === 'relative' ? selectedRelativeRange : joinAbsoluteValue(selectedAbsoluteRange);
            const newValidationResult = isValidRange(visibleRange);
            setValidationResult(newValidationResult || VALID_RANGE);
        }
    }, [
        applyClicked,
        isValidRange,
        rangeSelectionMode,
        selectedRelativeRange,
        selectedAbsoluteRange,
        setValidationResult,
    ]);
    useEffect(() => { var _a; return (_a = scrollableContainerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, [scrollableContainerRef]);
    return (React.createElement(React.Fragment, null,
        React.createElement(FocusLock, { className: styles['focus-lock'], autoFocus: true },
            React.createElement("div", { ref: scrollableContainerRef, className: styles.dropdown, tabIndex: 0, role: "dialog", "aria-modal": "true", "aria-label": i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.ariaLabel, "aria-labelledby": ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.ariaLabelledby, "aria-describedby": ariaDescribedby !== null && ariaDescribedby !== void 0 ? ariaDescribedby : i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.ariaDescribedby },
                React.createElement("div", { className: clsx(styles['dropdown-content'], {
                        [styles['one-grid']]: isSingleGrid,
                    }) },
                    React.createElement(InternalSpaceBetween, { size: "l" },
                        React.createElement(InternalBox, { padding: { top: 'm', horizontal: 'l' } },
                            React.createElement(InternalSpaceBetween, { direction: "vertical", size: "s" },
                                rangeSelectorMode === 'default' && (React.createElement(ModeSwitcher, { mode: rangeSelectionMode, onChange: (mode) => {
                                        setRangeSelectionMode(mode);
                                        setApplyClicked(false);
                                        setValidationResult(VALID_RANGE);
                                    }, i18nStrings: i18nStrings })),
                                rangeSelectionMode === 'absolute' && (React.createElement(Calendar, { value: selectedAbsoluteRange, setValue: setSelectedAbsoluteRange, locale: locale, startOfWeek: startOfWeek, isDateEnabled: isDateEnabled, i18nStrings: i18nStrings, dateOnly: dateOnly, timeInputFormat: timeInputFormat, customAbsoluteRangeControl: customAbsoluteRangeControl })),
                                rangeSelectionMode === 'relative' && (React.createElement(RelativeRangePicker, { isSingleGrid: isSingleGrid, options: relativeOptions, dateOnly: dateOnly, initialSelection: selectedRelativeRange, onChange: range => setSelectedRelativeRange(range), i18nStrings: i18nStrings }))),
                            React.createElement(InternalBox, { className: styles['validation-section'], margin: !validationResult.valid ? { top: 's' } : undefined }, !validationResult.valid && (React.createElement(React.Fragment, null,
                                React.createElement(InternalAlert, { type: "error", statusIconAriaLabel: i18n('i18nStrings.errorIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel) },
                                    React.createElement("span", { className: styles['validation-error'] }, validationResult.errorMessage)),
                                React.createElement(LiveRegion, null, validationResult.errorMessage))))),
                        React.createElement("div", { className: clsx(styles.footer, {
                                [styles['one-grid']]: isSingleGrid,
                                [styles['has-clear-button']]: showClearButton,
                            }) },
                            showClearButton && (React.createElement("div", { className: styles['footer-button-wrapper'] },
                                React.createElement(InternalButton, { onClick: onClear, className: styles['clear-button'], variant: "link", formAction: "none" }, i18n('i18nStrings.clearButtonLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.clearButtonLabel)))),
                            React.createElement("div", { className: styles['footer-button-wrapper'] },
                                React.createElement(InternalSpaceBetween, { size: "xs", direction: "horizontal" },
                                    React.createElement(InternalButton, { onClick: closeDropdown, className: styles['cancel-button'], variant: "link", formAction: "none" }, i18n('i18nStrings.cancelButtonLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.cancelButtonLabel)),
                                    React.createElement(InternalButton, { onClick: onApply, className: styles['apply-button'], ref: applyButtonRef, formAction: "none" }, i18n('i18nStrings.applyButtonLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.applyButtonLabel)))))))))));
}
//# sourceMappingURL=dropdown.js.map