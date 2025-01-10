// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useContext } from 'react';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import styles from './styles.css.js';
import { CollectionLabelContext } from '../internal/context/collection-label-context';
import { useUniqueId } from '../internal/hooks/use-unique-id';
export default function ToolsHeader({ header, filter, pagination, preferences }) {
    const [breakpoint, ref] = useContainerBreakpoints(['xs']);
    const isHeaderString = typeof header === 'string';
    const assignHeaderId = useContext(CollectionLabelContext).assignId;
    const headingId = useUniqueId('heading');
    if (assignHeaderId !== undefined && isHeaderString) {
        assignHeaderId(headingId);
    }
    const isSmall = breakpoint === 'default';
    const hasTools = filter || pagination || preferences;
    return (React.createElement(React.Fragment, null,
        isHeaderString ? React.createElement("span", { id: headingId }, header) : header,
        hasTools && (React.createElement("div", { ref: ref, className: clsx(styles.tools, isSmall && styles['tools-small']) },
            filter && React.createElement("div", { className: styles['tools-filtering'] }, filter),
            React.createElement("div", { className: styles['tools-align-right'] },
                pagination && React.createElement("div", { className: styles['tools-pagination'] }, pagination),
                preferences && React.createElement("div", { className: styles['tools-preferences'] }, preferences))))));
}
//# sourceMappingURL=tools-header.js.map