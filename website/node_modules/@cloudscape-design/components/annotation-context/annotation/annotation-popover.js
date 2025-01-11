// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalBox from '../../box/internal';
import { InternalButton } from '../../button/internal';
import InternalSpaceBetween from '../../space-between/internal';
import PopoverContainer from '../../popover/container';
import PopoverBody from '../../popover/body';
import InternalAlert from '../../alert/internal';
import { scrollElementIntoView } from '../../internal/utils/scrollable-containers';
import { useUniqueId } from '../../internal/hooks/use-unique-id/index.js';
import { joinStrings } from '../../internal/utils/strings/join-strings.js';
const arrow = (position) => (React.createElement("div", { className: clsx(styles.arrow, styles[`arrow-position-${position}`]) },
    React.createElement("div", { className: styles['arrow-outer'] }),
    React.createElement("div", { className: styles['arrow-inner'] })));
export function AnnotationPopover({ title, content, alert, direction = 'top', taskLocalStepIndex, totalLocalSteps, showPreviousButton, showFinishButton, onDismiss, nextButtonEnabled, onNextButtonClick, onFinish, trackRef, previousButtonEnabled, onPreviousButtonClick, i18nStrings, }) {
    useEffect(() => {
        var _a;
        scrollElementIntoView((_a = trackRef.current) !== null && _a !== void 0 ? _a : undefined);
    }, [trackRef]);
    const popoverHeaderId = useUniqueId('poppver-header-');
    const stepCounterId = useUniqueId('step-counter-');
    return (React.createElement(PopoverContainer, { size: "medium", fixedWidth: false, position: direction, trackRef: trackRef, trackKey: taskLocalStepIndex, variant: "annotation", arrow: arrow, zIndex: 1000 },
        React.createElement(PopoverBody, { dismissButton: true, dismissAriaLabel: i18nStrings.labelDismissAnnotation, header: React.createElement(InternalBox, { id: popoverHeaderId, color: "text-body-secondary", fontSize: "body-s", margin: { top: 'xxxs' }, className: styles.header }, title), onDismiss: onDismiss, className: styles.annotation, variant: "annotation", overflowVisible: "content", 
            // create new dialog to have the native dialog behavior of the screen readers
            key: taskLocalStepIndex, ariaLabelledby: joinStrings(popoverHeaderId, stepCounterId) },
            React.createElement(InternalSpaceBetween, { size: "s" },
                React.createElement("div", { className: styles.description },
                    React.createElement(InternalBox, { className: styles.content }, content)),
                alert && React.createElement(InternalAlert, { type: "warning" }, alert),
                React.createElement(InternalSpaceBetween, { size: "s" },
                    React.createElement("div", { className: styles.divider }),
                    React.createElement("div", { className: styles.actionBar },
                        React.createElement("div", { className: styles.stepCounter },
                            React.createElement(InternalBox, { id: stepCounterId, className: styles['step-counter-content'], color: "text-body-secondary", fontSize: "body-s" }, i18nStrings.stepCounterText(taskLocalStepIndex !== null && taskLocalStepIndex !== void 0 ? taskLocalStepIndex : 0, totalLocalSteps !== null && totalLocalSteps !== void 0 ? totalLocalSteps : 0))),
                        React.createElement(InternalSpaceBetween, { size: "xs", direction: "horizontal" },
                            showPreviousButton && (React.createElement(InternalButton, { variant: "link", onClick: onPreviousButtonClick, disabled: !previousButtonEnabled, formAction: "none", ariaLabel: i18nStrings.previousButtonText, className: styles['previous-button'] }, i18nStrings.previousButtonText)),
                            showFinishButton ? (React.createElement(InternalButton, { onClick: onFinish, formAction: "none", ariaLabel: i18nStrings.finishButtonText, className: styles['finish-button'] }, i18nStrings.finishButtonText)) : (React.createElement(InternalButton, { onClick: onNextButtonClick, disabled: !nextButtonEnabled, formAction: "none", ariaLabel: i18nStrings.nextButtonText, className: styles['next-button'] }, i18nStrings.nextButtonText)))))))));
}
//# sourceMappingURL=annotation-popover.js.map