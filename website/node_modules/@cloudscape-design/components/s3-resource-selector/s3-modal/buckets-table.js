// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalLink from '../../link/internal';
import { compareDates, getColumnAriaLabel, includes } from './table-utils';
import { formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { useInternalI18n } from '../../i18n/context';
export function BucketsTable({ forwardFocusRef, i18nStrings, isVisualRefresh, isItemDisabled, selectableItemsTypes, fetchData, visibleColumns, onDrilldown, onSelect, }) {
    var _a, _b, _c, _d;
    const i18n = useInternalI18n('s3-resource-selector');
    return (React.createElement(BasicS3Table, { forwardFocusRef: forwardFocusRef, trackBy: "Name", fetchData: fetchData, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled || (() => !includes(selectableItemsTypes, 'buckets')), i18nStrings: Object.assign(Object.assign({}, getSharedI18Strings(i18n, i18nStrings)), { header: i18n('i18nStrings.selectionBuckets', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBuckets), loadingText: i18n('i18nStrings.selectionBucketsLoading', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsLoading), filteringAriaLabel: (_a = i18n('i18nStrings.labelFiltering', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering, format => itemsType => format({ itemsType }))) === null || _a === void 0 ? void 0 : _a((_b = i18n('i18nStrings.selectionBuckets', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBuckets)) !== null && _b !== void 0 ? _b : ''), filteringPlaceholder: i18n('i18nStrings.selectionBucketsSearchPlaceholder', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsSearchPlaceholder), emptyText: i18n('i18nStrings.selectionBucketsNoItems', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsNoItems), selectionLabels: Object.assign(Object.assign({}, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsBucketsSelection), { selectionGroupLabel: i18n('i18nStrings.labelsBucketsSelection.selectionGroupLabel', (_c = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsBucketsSelection) === null || _c === void 0 ? void 0 : _c.selectionGroupLabel), itemSelectionLabel: i18n('i18nStrings.labelsBucketsSelection.itemSelectionLabel', (_d = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsBucketsSelection) === null || _d === void 0 ? void 0 : _d.itemSelectionLabel, format => (data, item) => { var _a; return format({ item__Name: (_a = item.Name) !== null && _a !== void 0 ? _a : '' }); }) }) }), isVisualRefresh: isVisualRefresh, columnDefinitions: [
            {
                id: 'Name',
                header: i18n('i18nStrings.columnBucketName', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketName),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnBucketName', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketName)),
                sortingField: 'Name',
                cell: item => {
                    const isClickable = includes(selectableItemsTypes, 'objects') || includes(selectableItemsTypes, 'versions');
                    return isClickable ? (React.createElement(InternalLink, { onFollow: () => item.Name && onDrilldown(item.Name), variant: "link" }, item.Name)) : (item.Name);
                },
                minWidth: '250px',
            },
            {
                id: 'CreationDate',
                header: i18n('i18nStrings.columnBucketCreationDate', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketCreationDate),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnBucketCreationDate', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketCreationDate)),
                sortingComparator: (a, b) => compareDates(a.CreationDate, b.CreationDate),
                cell: item => formatDefault(item.CreationDate),
            },
            {
                id: 'Region',
                header: i18n('i18nStrings.columnBucketRegion', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketRegion),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnBucketRegion', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketRegion)),
                sortingField: 'Region',
                cell: item => formatDefault(item.Region),
                minWidth: '150px',
            },
        ], onSelect: item => { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.Name) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=buckets-table.js.map