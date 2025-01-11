// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
const defaultContext = {
    getContentForId: () => null,
    registerHotspot() { },
    unregisterHotspot() { },
    currentStepIndex: 0,
    currentTutorial: null,
    onStartTutorial() { },
    onExitTutorial() { },
};
export const hotspotContext = React.createContext(defaultContext);
//# sourceMappingURL=context.js.map