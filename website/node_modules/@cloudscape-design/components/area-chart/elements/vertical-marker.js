// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import VerticalMarker from '../../internal/components/cartesian-chart/vertical-marker';
import { useSelector } from '../async-store';
export default memo(AreaVerticalMarker);
function AreaVerticalMarker({ model }) {
    const highlightedX = useSelector(model.interactions, state => state.highlightedX);
    const verticalMarker = (highlightedX || []).map(point => ({
        key: `${point.index.x}:${point.index.s}`,
        x: point.scaled.x,
        y: point.scaled.y1,
        color: model.getInternalSeries(model.series[point.index.s]).color,
    }));
    return React.createElement(VerticalMarker, { height: model.height, points: verticalMarker, ref: model.refs.verticalMarker });
}
//# sourceMappingURL=vertical-marker.js.map