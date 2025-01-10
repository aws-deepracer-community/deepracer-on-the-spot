// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useResizeObserver } from '@cloudscape-design/component-toolkit/internal';
import { useCallback, useState } from 'react';
/**
 * Conditional resize observer for border box height used in charts.
 */
export function useHeightMeasure(getMeasure, skip = false, deps = []) {
    const [measuredHeight, setHeight] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const stableGetMeasure = useCallback(getMeasure, [...deps, skip]);
    useResizeObserver(stableGetMeasure, entry => !skip && setHeight(entry.borderBoxHeight));
    return !skip ? measuredHeight : undefined;
}
//# sourceMappingURL=use-height-measure.js.map