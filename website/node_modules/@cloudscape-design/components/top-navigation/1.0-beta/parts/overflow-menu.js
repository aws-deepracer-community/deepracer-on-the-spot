import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import MenuDropdown from '../../../internal/components/menu-dropdown';
import { fireCancelableEvent } from '../../../internal/events';
import styles from '../styles.css.js';
function transformButtonDropdownItems(items, index) {
    return items.map(item => {
        const itemCopy = Object.assign(Object.assign({}, item), { id: `${index}__${item.id || ''}` });
        if ('items' in itemCopy) {
            itemCopy.items = transformButtonDropdownItems(itemCopy.items, index);
        }
        return itemCopy;
    });
}
export function transformUtility(utility, index) {
    const title = utility.title || utility.text || '';
    const commonProps = {
        // Encode index into the ID, so we can pick out the right handler.
        id: `${index}__`,
        text: title,
        iconName: utility.iconName,
        iconUrl: utility.iconUrl,
        iconAlt: utility.iconAlt,
        iconSvg: utility.iconSvg,
    };
    if (utility.type === 'menu-dropdown') {
        return Object.assign(Object.assign({}, commonProps), { items: transformButtonDropdownItems(utility.items, index), description: utility.description });
    }
    else {
        return Object.assign(Object.assign({}, commonProps), { href: utility.href, external: utility.external, externalIconAriaLabel: utility.externalIconAriaLabel });
    }
}
export default function OverflowMenu({ children, utilities, isNarrowViewport }) {
    const onClick = (isFollow, event) => {
        const [index, ...rest] = event.detail.id.split('__');
        const utility = utilities[parseInt(index)];
        let defaultPrevented = false;
        if ('onItemClick' in utility) {
            defaultPrevented = fireCancelableEvent(utility.onItemClick, Object.assign(Object.assign({}, event.detail), { id: rest.join('__') }));
        }
        else if ('onClick' in utility && (isFollow || !utility.href)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = event.detail, { id } = _a, baseNavigationalDetail = __rest(_a, ["id"]);
            defaultPrevented = fireCancelableEvent(utility.onClick, baseNavigationalDetail);
        }
        if (defaultPrevented) {
            event.preventDefault();
        }
    };
    return (React.createElement(MenuDropdown, { items: utilities.map(transformUtility), offsetRight: isNarrowViewport ? 'l' : 'xxl', className: styles.trigger, expandableGroups: true, onItemClick: onClick.bind(null, false), onItemFollow: onClick.bind(null, true) }, children));
}
//# sourceMappingURL=overflow-menu.js.map