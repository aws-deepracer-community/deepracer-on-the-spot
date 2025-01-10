// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { addMonths } from 'date-fns';
import React from 'react';
import { InternalButton } from '../../../button/internal';
import styles from '../../styles.css.js';
export function PrevMonthButton({ ariaLabel, baseDate, onChangeMonth }) {
    return (React.createElement(InternalButton, { iconName: "angle-left", ariaLabel: ariaLabel, variant: 'icon', onClick: () => onChangeMonth(addMonths(baseDate, -1)), formAction: "none", className: styles['calendar-prev-month-btn'] }));
}
export function NextMonthButton({ ariaLabel, baseDate, onChangeMonth }) {
    return (React.createElement(InternalButton, { iconName: "angle-right", ariaLabel: ariaLabel, variant: 'icon', onClick: () => onChangeMonth(addMonths(baseDate, 1)), formAction: "none", className: styles['calendar-next-month-btn'] }));
}
//# sourceMappingURL=header-button.js.map