// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import { line, area } from 'd3-shape';
export default memo(AreaSeries);
function AreaSeries({ data, color, chartAreaClipPath }) {
    const areaGenerator = area()
        .x((p) => p.scaled.x)
        .y0((p) => p.scaled.y0)
        .y1((p) => p.scaled.y1);
    const areaPath = areaGenerator(data) || '';
    const lineGenerator = line()
        .x((p) => p.scaled.x)
        .y((p) => p.scaled.y1);
    const linePath = lineGenerator(data) || '';
    return (React.createElement(React.Fragment, null,
        React.createElement("path", { "aria-hidden": true, fill: color, stroke: color, style: { opacity: 0.4 }, clipPath: `url(#${chartAreaClipPath})`, d: areaPath }),
        React.createElement("path", { "aria-hidden": true, stroke: color, clipPath: `url(#${chartAreaClipPath})`, d: linePath })));
}
//# sourceMappingURL=area-series.js.map