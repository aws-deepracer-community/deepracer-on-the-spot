// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import styles from './styles.css.js';
export default memo(forwardRef(VerticalMarker));
function VerticalMarker({ height, showPoints = true, showLine = true, points }, ref) {
    const [firstPoint] = points || [];
    return (React.createElement("g", null,
        React.createElement("line", { ref: ref, "aria-hidden": "true", className: styles['vertical-marker'], style: { visibility: showLine && firstPoint ? 'visible' : 'hidden' }, x1: firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.x, x2: firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.x, y1: 0, y2: height }),
        showPoints &&
            points &&
            points.map(point => (React.createElement("circle", { key: point.key, "aria-hidden": "true", className: styles['vertical-marker-circle'], cx: point.x, cy: point.y, r: 4, stroke: point.color })))));
}
//# sourceMappingURL=vertical-marker.js.map