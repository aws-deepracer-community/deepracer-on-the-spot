// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
export function checkColumnWidths(columnDefinitions) {
    for (const column of columnDefinitions) {
        checkProperty(column, 'minWidth');
        checkProperty(column, 'width');
    }
}
export function setElementWidths(element, styles) {
    function setProperty(property) {
        const value = styles[property];
        let widthCssValue = '';
        if (typeof value === 'number') {
            widthCssValue = value + 'px';
        }
        if (typeof value === 'string') {
            widthCssValue = value;
        }
        if (element.style[property] !== widthCssValue) {
            element.style[property] = widthCssValue;
        }
    }
    setProperty('width');
    setProperty('minWidth');
    setProperty('maxWidth');
}
function checkProperty(column, name) {
    const value = column[name];
    if (typeof value !== 'number' && typeof value !== 'undefined') {
        warnOnce('Table', `resizableColumns feature requires ${name} property to be a number, got ${value}. The component may work incorrectly.`);
    }
}
//# sourceMappingURL=column-widths-utils.js.map