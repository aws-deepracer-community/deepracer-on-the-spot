// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
const OUTLINE_PADDING = 2;
/**
 * The component renders empty SVG rectangles corresponding to the bar group slots.
 * The highlighted group rectangle is used for the pseudo-focus and therefore requires ARIA attributes.
 * Other rectangles are only needed for the "findBarGroups" test-utils selector.
 */
export default function BarGroups({ ariaLabel, isRefresh, isPopoverPinned, barGroups, highlightedGroupIndex, highlightedGroupRef, }) {
    return (React.createElement("g", { role: "group", "aria-hidden": "true" }, barGroups.map((group, index) => (React.createElement("rect", { key: index, x: Math.max(0, group.position.x - OUTLINE_PADDING), y: Math.max(0, group.position.y - OUTLINE_PADDING), width: group.position.width + 2 * OUTLINE_PADDING, height: group.position.height + 2 * OUTLINE_PADDING, ref: index === highlightedGroupIndex ? highlightedGroupRef : undefined, rx: isRefresh ? 4 : 2, role: "button", "aria-label": ariaLabel, "aria-haspopup": true, "aria-expanded": isPopoverPinned, fill: "none", className: styles['bar-group'] })))));
}
//# sourceMappingURL=bar-groups.js.map