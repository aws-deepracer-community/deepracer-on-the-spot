// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import LiveRegion from '../internal/components/live-region';
import styles from './styles.css.js';
export const AdditionalInfo = ({ children, id }) => (React.createElement(LiveRegion, { visible: true, tagName: "div", "data-testid": "info-live-region" },
    React.createElement("div", { id: id, className: styles['additional-info'] }, children)));
//# sourceMappingURL=additional-info.js.map