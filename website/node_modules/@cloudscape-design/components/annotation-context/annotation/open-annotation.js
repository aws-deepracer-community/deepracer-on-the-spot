// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import AnnotationTrigger from './annotation-trigger';
import { AnnotationPopover } from './annotation-popover';
export function OpenAnnotation({ title, content, alert, direction, showPreviousButton, showFinishButton, taskLocalStepIndex, totalLocalSteps, onDismiss, nextButtonEnabled, onNextButtonClick, onFinish, previousButtonEnabled, onPreviousButtonClick, i18nStrings, }) {
    const trackRef = useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(AnnotationTrigger, { open: true, onClick: onDismiss, i18nStrings: i18nStrings, ref: trackRef, totalLocalSteps: totalLocalSteps, taskLocalStepIndex: taskLocalStepIndex }),
        React.createElement(AnnotationPopover, { trackRef: trackRef, previousButtonEnabled: previousButtonEnabled, showPreviousButton: showPreviousButton, showFinishButton: showFinishButton, totalLocalSteps: totalLocalSteps, i18nStrings: i18nStrings, nextButtonEnabled: nextButtonEnabled, onDismiss: onDismiss, onFinish: onFinish, onNextButtonClick: onNextButtonClick, onPreviousButtonClick: onPreviousButtonClick, taskLocalStepIndex: taskLocalStepIndex, direction: direction, title: title, content: content, alert: alert })));
}
//# sourceMappingURL=open-annotation.js.map