// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useState } from 'react';
import AnnotationTrigger from './annotation-trigger';
export function ClosedAnnotation({ globalStepIndex, onOpen, i18nStrings, focusOnRender, totalLocalSteps, taskLocalStepIndex, }) {
    const [hotspotRef, setHotspotRef] = useState(null);
    const onClick = useCallback(() => {
        onOpen(globalStepIndex);
    }, [globalStepIndex, onOpen]);
    useEffect(() => {
        if (focusOnRender && hotspotRef) {
            hotspotRef.focus();
        }
    }, [focusOnRender, hotspotRef]);
    return (React.createElement(AnnotationTrigger, { open: false, onClick: onClick, i18nStrings: i18nStrings, ref: setHotspotRef, totalLocalSteps: totalLocalSteps, taskLocalStepIndex: taskLocalStepIndex }));
}
//# sourceMappingURL=closed-annotation.js.map