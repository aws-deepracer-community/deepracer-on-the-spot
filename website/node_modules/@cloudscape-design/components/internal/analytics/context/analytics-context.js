// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { createContext } from 'react';
import { getFunnelNameSelector } from '../selectors';
/* istanbul ignore next */
export const FunnelContext = createContext({
    funnelInteractionId: undefined,
    funnelNameSelector: getFunnelNameSelector(),
    setFunnelInteractionId: () => { },
    funnelType: 'single-page',
    optionalStepNumbers: [],
    totalFunnelSteps: 0,
    funnelSubmit: () => { },
    funnelCancel: () => { },
    submissionAttempt: 0,
    funnelNextOrSubmitAttempt: () => { },
    funnelState: { current: 'default' },
    errorCount: { current: 0 },
    loadingButtonCount: { current: 0 },
    latestFocusCleanupFunction: { current: undefined },
    isInFunnel: false,
    wizardCount: { current: 0 },
});
export const FunnelStepContext = createContext({
    stepNameSelector: '',
    stepNumber: 0,
    subStepCount: { current: 0 },
    isInStep: false,
    funnelInteractionId: undefined,
    onStepChange: () => { },
    subStepConfiguration: { current: new Map() },
});
export const FunnelSubStepContext = createContext({
    subStepId: '',
    subStepSelector: '',
    subStepNameSelector: '',
    subStepRef: { current: null },
    isNestedSubStep: false,
    mousePressed: { current: false },
    isFocusedSubStep: { current: false },
    focusCleanupFunction: { current: undefined },
});
export const FunnelNameSelectorContext = createContext(undefined);
//# sourceMappingURL=analytics-context.js.map