// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import styles from './styles.css.js';
export default memo(forwardRef(HighlightedPoint));
function HighlightedPoint({ point, role = 'group', ariaLabel, ariaHasPopup, ariaExpanded }, ref) {
    if (!point) {
        return null;
    }
    return (React.createElement("g", { ref: ref, role: role, "aria-label": ariaLabel, "aria-haspopup": ariaHasPopup, "aria-expanded": ariaExpanded },
        React.createElement("circle", { key: point.key, "aria-hidden": "true", className: styles['vertical-marker-circle-active'], cx: point.x, cy: point.y, r: 4, stroke: point.color, fill: point.color })));
}
//# sourceMappingURL=highlighted-point.js.map