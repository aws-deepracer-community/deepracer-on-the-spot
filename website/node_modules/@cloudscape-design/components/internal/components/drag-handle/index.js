// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Handle from '../handle';
import InternalIcon from '../../../icon/internal';
import styles from './styles.css.js';
import handleStyles from '../handle/styles.css.js';
import clsx from 'clsx';
export default function DragHandle({ attributes, hideFocus, listeners }) {
    return (React.createElement(Handle, Object.assign({ className: clsx(styles.handle, hideFocus && handleStyles['hide-focus']) }, attributes, listeners),
        React.createElement(InternalIcon, { name: "drag-indicator" })));
}
//# sourceMappingURL=index.js.map