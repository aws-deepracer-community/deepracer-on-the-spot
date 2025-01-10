// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import LiveRegion from '../internal/components/live-region';
// Debounce delay for live region (based on testing with VoiceOver)
const LIVE_REGION_DELAY = 2000;
export function SearchResults({ id, children }) {
    return (React.createElement("span", { className: styles.results },
        React.createElement(LiveRegion, { delay: LIVE_REGION_DELAY, visible: true },
            React.createElement("span", { id: id }, children))));
}
//# sourceMappingURL=search-results.js.map