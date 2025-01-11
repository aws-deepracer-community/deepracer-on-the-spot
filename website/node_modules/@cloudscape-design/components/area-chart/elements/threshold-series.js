// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
export default memo(ThresholdSeries);
function ThresholdSeries({ data, xScale, color, chartAreaClipPath }) {
    const range = xScale.d3Scale.range();
    const y = data[0].scaled.y0;
    const path = { x1: range[0], x2: range[1], y1: y, y2: y };
    return React.createElement("line", Object.assign({ "aria-hidden": true, stroke: color, clipPath: `url(#${chartAreaClipPath})` }, path));
}
//# sourceMappingURL=threshold-series.js.map