// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback } from 'react';
import styles from './styles.css.js';
import { AnnotationIcon } from './annotation-icon';
export default React.forwardRef(function AnnotationTrigger({ open, onClick: onClickHandler, i18nStrings, taskLocalStepIndex, totalLocalSteps }, ref) {
    const onClick = useCallback((event) => {
        event.preventDefault();
        onClickHandler();
    }, [onClickHandler]);
    return (React.createElement("button", { ref: ref, className: styles.hotspot, "aria-haspopup": "dialog", "aria-label": i18nStrings.labelHotspot(open, taskLocalStepIndex !== null && taskLocalStepIndex !== void 0 ? taskLocalStepIndex : 0, totalLocalSteps !== null && totalLocalSteps !== void 0 ? totalLocalSteps : 0), onClick: onClick },
        React.createElement(AnnotationIcon, { open: open })));
});
//# sourceMappingURL=annotation-trigger.js.map