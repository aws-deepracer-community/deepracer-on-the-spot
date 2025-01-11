// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback } from 'react';
import styles from './styles.css.js';
import InternalBox from '../../../box/internal';
import InternalStatusIndicator from '../../../status-indicator/internal';
import InternalSpaceBetween from '../../../space-between/internal';
import InternalExpandableSection from '../../../expandable-section/internal';
import { joinStrings } from '../../../internal/utils/strings/join-strings.js';
function getStatusIndicatorType(taskIndex, currentTaskIndex) {
    if (taskIndex < currentTaskIndex) {
        return 'success';
    }
    if (taskIndex === currentTaskIndex) {
        return 'in-progress';
    }
    return 'pending';
}
export function Task({ task, taskIndex, currentTaskIndex, expanded, onToggleExpand, i18nStrings }) {
    const statusIndicatorType = getStatusIndicatorType(taskIndex, currentTaskIndex);
    const onExpandChange = useCallback(() => {
        onToggleExpand(taskIndex);
    }, [onToggleExpand, taskIndex]);
    return (React.createElement("li", { className: styles.task },
        React.createElement(InternalSpaceBetween, { size: "xxs" },
            React.createElement("div", { className: styles['task-title'] },
                React.createElement(InternalStatusIndicator, { __size: "inherit", type: statusIndicatorType, iconAriaLabel: i18nStrings.labelsTaskStatus[statusIndicatorType], className: styles['task-title--status'] }),
                React.createElement(InternalBox, { variant: "h3", padding: { left: 'xxxs', vertical: 'n' }, fontSize: "heading-s", color: taskIndex < currentTaskIndex ? 'text-status-success' : 'text-status-inactive' }, i18nStrings.taskTitle(taskIndex, task.title))),
            React.createElement("div", { className: styles['expandable-section-wrapper'] },
                React.createElement(InternalExpandableSection, { header: React.createElement("span", { className: styles['expandable-section-header'] }, i18nStrings.labelTotalSteps(task.steps.length)), expanded: expanded, onChange: onExpandChange, headerAriaLabel: joinStrings(i18nStrings.taskTitle(taskIndex, task.title), i18nStrings.labelTotalSteps(task.steps.length)) },
                    React.createElement("ol", { className: styles['step-list'] }, task.steps.map((step, stepIndex) => (React.createElement("li", { key: stepIndex, className: styles.step },
                        React.createElement(InternalBox, { color: "text-body-secondary", fontSize: "body-m", padding: { left: 'l' }, className: styles['step-title'] }, i18nStrings.stepTitle(stepIndex, step.title)))))))))));
}
//# sourceMappingURL=task.js.map