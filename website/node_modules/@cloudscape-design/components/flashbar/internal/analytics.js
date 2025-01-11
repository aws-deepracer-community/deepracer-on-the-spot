// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { PACKAGE_SOURCE, PACKAGE_VERSION } from '../../internal/environment';
import { Metrics } from '@cloudscape-design/component-toolkit/internal';
import { getFlashTypeCount } from '../utils';
const metrics = new Metrics(PACKAGE_SOURCE, PACKAGE_VERSION);
const eventContext = 'csa_flashbar';
export const sendRenderMetric = (items) => {
    const countByType = getFlashTypeCount(items);
    metrics.sendPanoramaMetric({
        eventContext,
        eventType: 'render',
        eventValue: items.length.toString(),
        eventDetail: countByType,
    });
};
export const sendToggleMetric = (itemsCount, expanded) => {
    metrics.sendPanoramaMetric({
        eventContext,
        eventType: expanded ? 'expand' : 'collapse',
        eventValue: itemsCount.toString(),
    });
};
export const sendDismissMetric = (itemType) => {
    metrics.sendPanoramaMetric({
        eventContext,
        eventType: 'dismiss',
        eventValue: itemType,
    });
};
//# sourceMappingURL=analytics.js.map