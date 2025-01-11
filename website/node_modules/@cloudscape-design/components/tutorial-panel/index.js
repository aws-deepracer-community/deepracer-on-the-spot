import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useContext } from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import TutorialList from './components/tutorial-list';
import TutorialDetailView from './components/tutorial-detail-view';
import { hotspotContext } from '../annotation-context/context';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function TutorialPanel(_a) {
    var { i18nStrings, loading, tutorials, onFeedbackClick, downloadUrl } = _a, restProps = __rest(_a, ["i18nStrings", "loading", "tutorials", "onFeedbackClick", "downloadUrl"]);
    const { __internalRootRef } = useBaseComponent('TutorialPanel');
    const baseProps = getBaseProps(restProps);
    const context = useContext(hotspotContext);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles['tutorial-panel']), ref: __internalRootRef }), context.currentTutorial ? (React.createElement(TutorialDetailView, { i18nStrings: i18nStrings, tutorial: context.currentTutorial, onExitTutorial: context.onExitTutorial, currentStepIndex: context.currentStepIndex, onFeedbackClick: onFeedbackClick })) : (React.createElement(TutorialList, { i18nStrings: i18nStrings, tutorials: tutorials, loading: loading, onStartTutorial: context.onStartTutorial, downloadUrl: downloadUrl })))));
}
applyDisplayName(TutorialPanel, 'TutorialPanel');
//# sourceMappingURL=index.js.map