// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import InternalStatusIndicator from '../../../status-indicator/internal';
import InternalSpaceBetween from '../../../space-between/internal';
import InternalLink from '../../../link/internal';
import clsx from 'clsx';
import InternalBox from '../../../box/internal';
export function CongratulationScreen({ children, onFeedbackClick, i18nStrings }) {
    return (React.createElement(InternalSpaceBetween, { size: "xxl" },
        React.createElement(InternalSpaceBetween, { size: "xl" },
            React.createElement("div", { className: styles['congratulation-message'] },
                React.createElement(InternalStatusIndicator, { __size: "inherit", type: "success", className: styles['congratulation-message--status'] }),
                React.createElement("div", { className: styles['completion-screen-title'] }, i18nStrings.completionScreenTitle)),
            React.createElement(InternalBox, { color: "text-body-secondary" },
                React.createElement("div", { className: clsx({
                        [styles['completion-screen-description']]: true,
                        [styles['plaintext-congratulation-description']]: typeof children === 'string',
                    }) }, children))),
        React.createElement("div", { className: styles.divider }),
        onFeedbackClick && (React.createElement(InternalLink, { onFollow: onFeedbackClick, className: styles['feedback-link'], variant: "primary" }, i18nStrings.feedbackLinkText))));
}
//# sourceMappingURL=congratulation-screen.js.map