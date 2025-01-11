// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { compareDates, getColumnAriaLabel, includes } from './table-utils';
import InternalIcon from '../../icon/internal';
import InternalLink from '../../link/internal';
import { formatSize, formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { joinObjectPath } from '../utils';
import { useInternalI18n } from '../../i18n/context';
export function ObjectsTable({ forwardFocusRef, pathSegments, i18nStrings, isVisualRefresh, isItemDisabled, selectableItemsTypes, fetchData, visibleColumns, onDrilldown, onSelect, }) {
    var _a, _b, _c, _d;
    const i18n = useInternalI18n('s3-resource-selector');
    return (React.createElement(BasicS3Table, { 
        // remount fresh component every we change the path to reset the inner state (e.g. selection/filtering)
        key: pathSegments.join('/'), forwardFocusRef: forwardFocusRef, trackBy: "Key", fetchData: () => {
            const [bucketName, ...rest] = pathSegments;
            return fetchData(bucketName, joinObjectPath(rest));
        }, i18nStrings: Object.assign(Object.assign({}, getSharedI18Strings(i18n, i18nStrings)), { header: i18n('i18nStrings.selectionObjects', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjects), loadingText: i18n('i18nStrings.selectionObjectsLoading', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsLoading), filteringAriaLabel: (_a = i18n('i18nStrings.labelFiltering', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering, format => itemsType => format({ itemsType }))) === null || _a === void 0 ? void 0 : _a((_b = i18n('i18nStrings.selectionObjects', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjects)) !== null && _b !== void 0 ? _b : ''), filteringPlaceholder: i18n('i18nStrings.selectionObjectsSearchPlaceholder', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsSearchPlaceholder), emptyText: i18n('i18nStrings.selectionObjectsNoItems', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionObjectsNoItems), selectionLabels: Object.assign(Object.assign({}, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsObjectsSelection), { selectionGroupLabel: i18n('i18nStrings.labelsObjectsSelection.selectionGroupLabel', (_c = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsObjectsSelection) === null || _c === void 0 ? void 0 : _c.selectionGroupLabel), itemSelectionLabel: i18n('i18nStrings.labelsObjectsSelection.itemSelectionLabel', (_d = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsObjectsSelection) === null || _d === void 0 ? void 0 : _d.itemSelectionLabel, format => (data, item) => { var _a; return format({ item__Key: (_a = item.Key) !== null && _a !== void 0 ? _a : '' }); }) }) }), isVisualRefresh: isVisualRefresh, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled || (() => !includes(selectableItemsTypes, 'objects')), columnDefinitions: [
            {
                id: 'Key',
                header: i18n('i18nStrings.columnObjectKey', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectKey),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnObjectKey', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectKey)),
                sortingField: 'Key',
                cell: item => {
                    const isClickable = item.IsFolder || includes(selectableItemsTypes, 'versions');
                    return (React.createElement(React.Fragment, null,
                        React.createElement(InternalIcon, { name: item.IsFolder ? 'folder' : 'file' }),
                        ' ',
                        isClickable ? (React.createElement(InternalLink, { onFollow: () => item.Key && onDrilldown(item), variant: "link" }, item.Key)) : (item.Key)));
                },
                minWidth: '250px',
            },
            {
                id: 'LastModified',
                header: i18n('i18nStrings.columnObjectLastModified', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectLastModified),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnObjectLastModified', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectLastModified)),
                sortingComparator: (a, b) => compareDates(a.LastModified, b.LastModified),
                cell: item => formatDefault(item.LastModified),
            },
            {
                id: 'Size',
                header: i18n('i18nStrings.columnObjectSize', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectSize),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnObjectSize', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnObjectSize)),
                sortingField: 'Size',
                cell: item => formatSize(item.Size),
            },
        ], onSelect: item => { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.Key) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=objects-table.js.map