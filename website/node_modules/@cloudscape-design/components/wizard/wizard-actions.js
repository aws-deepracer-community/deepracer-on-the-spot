// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import { InternalButton } from '../button/internal';
import InternalSpaceBetween from '../space-between/internal';
import styles from './styles.css.js';
import Unmount from './unmount';
export default function WizardActions({ cancelButtonText, onCancelClick, isPrimaryLoading, primaryButtonText, primaryButtonLoadingText, onPrimaryClick, showPrevious, previousButtonText, onPreviousClick, showSkipTo, skipToButtonText, onSkipToClick, }) {
    const containerRef = useRef(null);
    const primaryButtonRef = useRef(null);
    const onPreviousUnmount = () => {
        var _a, _b;
        if (((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${styles['previous-button']}`)) === document.activeElement) {
            (_b = primaryButtonRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    };
    const onSkipUnmount = () => {
        var _a, _b;
        if (((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${styles['skip-to-button']}`)) === document.activeElement) {
            (_b = primaryButtonRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    };
    return (React.createElement("div", { ref: containerRef },
        React.createElement(InternalSpaceBetween, { direction: "horizontal", size: "xs", className: styles['action-buttons'] },
            React.createElement(InternalButton, { className: styles['cancel-button'], variant: "link", formAction: "none", onClick: onCancelClick }, cancelButtonText),
            showSkipTo && skipToButtonText && (React.createElement(Unmount, { onUnmount: onSkipUnmount },
                React.createElement(InternalButton, { className: styles['skip-to-button'], onClick: onSkipToClick, formAction: "none", disabled: isPrimaryLoading }, skipToButtonText))),
            showPrevious && (React.createElement(Unmount, { onUnmount: onPreviousUnmount },
                React.createElement(InternalButton, { className: styles['previous-button'], onClick: onPreviousClick, formAction: "none", disabled: isPrimaryLoading }, previousButtonText))),
            React.createElement(InternalButton, { ref: primaryButtonRef, className: styles['primary-button'], variant: "primary", formAction: "none", onClick: onPrimaryClick, loading: isPrimaryLoading, loadingText: primaryButtonLoadingText }, primaryButtonText))));
}
//# sourceMappingURL=wizard-actions.js.map