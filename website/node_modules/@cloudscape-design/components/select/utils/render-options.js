// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Item from '../parts/item';
import MutliselectItem from '../parts/multiselect-item';
import { getItemProps } from './get-item-props';
export const renderOptions = ({ options, getOptionProps, filteringValue, highlightType, checkboxes = false, hasDropdownStatus, virtualItems, useInteractiveGroups, screenReaderContent, ariaSetsize, }) => {
    return options.map((option, index) => {
        const virtualItem = virtualItems && virtualItems[index];
        const globalIndex = virtualItem ? virtualItem.index : index;
        const props = getItemProps({
            option,
            index: globalIndex,
            getOptionProps,
            filteringValue,
            checkboxes,
        });
        const isLastItem = index === options.length - 1;
        const padBottom = !hasDropdownStatus && isLastItem;
        const ListItem = useInteractiveGroups ? MutliselectItem : Item;
        return (React.createElement(ListItem, Object.assign({ key: globalIndex }, props, { virtualPosition: virtualItem && virtualItem.start, ref: virtualItem && virtualItem.measureRef, padBottom: padBottom, screenReaderContent: screenReaderContent, ariaPosinset: globalIndex + 1, ariaSetsize: ariaSetsize, highlightType: highlightType.type })));
    });
};
//# sourceMappingURL=render-options.js.map