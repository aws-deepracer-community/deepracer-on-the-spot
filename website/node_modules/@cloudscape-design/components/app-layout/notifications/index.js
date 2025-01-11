import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import clsx from 'clsx';
export const Notifications = React.forwardRef((_a, ref) => {
    var _b, _c;
    var { sticky, disableContentPaddings } = _a, props = __rest(_a, ["sticky", "disableContentPaddings"]);
    return sticky ? (React.createElement("div", { ref: ref, className: styles['notifications-sticky'], style: { top: props.topOffset } },
        React.createElement("div", { role: "region", className: clsx(props.testUtilsClassName, disableContentPaddings && styles['no-content-paddings']), "aria-label": (_b = props.labels) === null || _b === void 0 ? void 0 : _b.notifications }, props.children))) : (React.createElement("div", { role: "region", ref: ref, className: clsx(props.testUtilsClassName, styles.notifications, disableContentPaddings && styles['no-content-paddings']), "aria-label": (_c = props.labels) === null || _c === void 0 ? void 0 : _c.notifications }, props.children));
});
//# sourceMappingURL=index.js.map