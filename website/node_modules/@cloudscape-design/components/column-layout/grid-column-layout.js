// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import InternalGrid from '../grid/internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { repeat } from './util';
import { COLUMN_TRIGGERS } from './internal';
import styles from './styles.css.js';
const COLUMN_DEFS = {
    1: { colspan: { default: 12, xxs: 12, xs: 12 } },
    2: { colspan: { default: 12, xxs: 6, xs: 6 } },
    3: { colspan: { default: 12, xxs: 6, xs: 4 } },
    4: { colspan: { default: 12, xxs: 6, xs: 3 } },
};
export default function GridColumnLayout({ columns, variant, borders, disableGutters, __breakpoint, children, }) {
    var _a;
    const isTextGridVariant = variant === 'text-grid';
    const shouldDisableGutters = !isTextGridVariant && disableGutters;
    const shouldHaveHorizontalBorders = !isTextGridVariant && (borders === 'horizontal' || borders === 'all');
    const shouldHaveVerticalBorders = !isTextGridVariant && (borders === 'vertical' || borders === 'all');
    // Flattening the children allows us to "see through" React Fragments and nested arrays.
    const flattenedChildren = flattenChildren(children);
    const [breakpoint, ref] = useContainerBreakpoints(COLUMN_TRIGGERS);
    return (React.createElement(InternalGrid, { ref: ref, disableGutters: true, gridDefinition: repeat((_a = COLUMN_DEFS[columns]) !== null && _a !== void 0 ? _a : {}, flattenedChildren.length), className: clsx(styles.grid, styles[`grid-columns-${columns}`], styles[`grid-variant-${variant}`], {
            [styles['grid-horizontal-borders']]: shouldHaveHorizontalBorders,
            [styles['grid-vertical-borders']]: shouldHaveVerticalBorders,
            [styles['grid-no-gutters']]: shouldDisableGutters,
        }), __breakpoint: __breakpoint || breakpoint, __responsiveClassName: breakpoint => breakpoint && styles[`grid-breakpoint-${breakpoint}`] }, children));
}
//# sourceMappingURL=grid-column-layout.js.map