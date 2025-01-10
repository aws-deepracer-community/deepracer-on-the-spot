// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef, useEffect } from 'react';
import { FunnelMetrics } from '../internal/analytics';
export function useFunnelChangeEvent(funnelInteractionId, steps) {
    const listenForStepChanges = useRef(false);
    useEffect(() => {
        // We prevent emitting the event before the funnel has stabilised.
        const handle = setTimeout(() => (listenForStepChanges.current = true), 0);
        return () => {
            clearTimeout(handle);
            listenForStepChanges.current = false;
        };
    }, [funnelInteractionId]);
    const stepTitles = steps.map(step => step.title).join();
    useEffect(() => {
        if (!funnelInteractionId || !listenForStepChanges.current) {
            return;
        }
        FunnelMetrics.funnelChange({
            funnelInteractionId,
            stepConfiguration: getStepConfiguration(steps),
        });
        // This dependency array does not include `steps`, because `steps` is not stable across renders.
        // We use `stepTitles` as a stable proxy.
        //
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [funnelInteractionId, stepTitles]);
}
export function getStepConfiguration(steps) {
    return steps.map((step, index) => {
        var _a;
        return ({
            name: step.title,
            number: index + 1,
            isOptional: (_a = step.isOptional) !== null && _a !== void 0 ? _a : false,
        });
    });
}
//# sourceMappingURL=analytics.js.map