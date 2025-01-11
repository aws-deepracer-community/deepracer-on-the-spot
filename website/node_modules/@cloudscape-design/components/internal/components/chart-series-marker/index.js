// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
export default memo(ChartSeriesMarker);
function ChartSeriesMarker({ type = 'line', color }) {
    return (React.createElement("span", { className: clsx(styles.marker, styles[`marker--${type}`]), style: { backgroundColor: color }, "aria-hidden": "true" }));
}
//# sourceMappingURL=index.js.map