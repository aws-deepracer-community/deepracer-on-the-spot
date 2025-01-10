// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.css.js';
import { InternalButton } from '../../../button/internal';
import InternalBox from '../../../box/internal';
import InternalSpaceBetween from '../../../space-between/internal';
import { Task } from './task';
import { getStepInfo } from '../../../annotation-context/utils';
export function TaskList({ tasks, onExitTutorial, currentGlobalStepIndex, i18nStrings }) {
    const currentTaskIndex = getStepInfo(tasks, currentGlobalStepIndex !== null && currentGlobalStepIndex !== void 0 ? currentGlobalStepIndex : 0).taskIndex;
    const [expandedTasks, setExpandedTasks] = useState({ [currentTaskIndex]: true });
    const onToggleExpand = useCallback((stepIndex) => {
        setExpandedTasks(prevTasks => (Object.assign(Object.assign({}, prevTasks), { [stepIndex]: !prevTasks[stepIndex] })));
    }, []);
    // When the user progresses to a different task, all tasks except this one are collapsed.
    useEffect(() => {
        setExpandedTasks({ [currentTaskIndex]: true });
    }, [currentTaskIndex]);
    return (React.createElement(InternalSpaceBetween, { size: "xxl" },
        React.createElement("ol", { className: styles['tutorial-list'] }, tasks.map((task, index) => {
            var _a;
            return (React.createElement(Task, { task: task, key: index, taskIndex: index, currentTaskIndex: currentTaskIndex, expanded: (_a = expandedTasks[index]) !== null && _a !== void 0 ? _a : false, onToggleExpand: onToggleExpand, i18nStrings: i18nStrings }));
        })),
        React.createElement(InternalBox, { margin: { top: 'xxxs' } },
            React.createElement(InternalButton, { onClick: onExitTutorial, formAction: "none", className: styles['dismiss-button'] }, i18nStrings.dismissTutorialButtonText))));
}
//# sourceMappingURL=task-list.js.map