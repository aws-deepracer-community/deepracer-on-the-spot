// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getColumnAriaLabel, compareDates } from './table-utils';
import { formatSize, formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { joinObjectPath } from '../utils';
import { useInternalI18n } from '../../i18n/context';
export function VersionsTable({ forwardFocusRef, pathSegments, i18nStrings, isVisualRefresh, isItemDisabled, fetchData, visibleColumns, onSelect, }) {
    var _a, _b, _c, _d;
    const i18n = useInternalI18n('s3-resource-selector');
    return (React.createElement(BasicS3Table, { forwardFocusRef: forwardFocusRef, trackBy: "VersionId", fetchData: () => {
            const [bucketName, ...rest] = pathSegments;
            return fetchData(bucketName, joinObjectPath(rest));
        }, i18nStrings: Object.assign(Object.assign({}, getSharedI18Strings(i18n, i18nStrings)), { header: i18n('i18nStrings.selectionVersions', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions), loadingText: i18n('i18nStrings.selectionVersionsLoading', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsLoading), filteringAriaLabel: (_a = i18n('i18nStrings.labelFiltering', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering, format => itemsType => format({ itemsType }))) === null || _a === void 0 ? void 0 : _a((_b = i18n('i18nStrings.selectionVersions', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions)) !== null && _b !== void 0 ? _b : ''), filteringPlaceholder: i18n('i18nStrings.selectionVersionsSearchPlaceholder', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsSearchPlaceholder), emptyText: i18n('i18nStrings.selectionVersionsNoItems', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsNoItems), selectionLabels: Object.assign(Object.assign({}, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsVersionsSelection), { selectionGroupLabel: i18n('i18nStrings.labelsVersionsSelection.selectionGroupLabel', (_c = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsVersionsSelection) === null || _c === void 0 ? void 0 : _c.selectionGroupLabel), itemSelectionLabel: i18n('i18nStrings.labelsVersionsSelection.itemSelectionLabel', (_d = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsVersionsSelection) === null || _d === void 0 ? void 0 : _d.itemSelectionLabel, format => (data, item) => { var _a; return format({ item__VersionId: (_a = item.VersionId) !== null && _a !== void 0 ? _a : '' }); }) }) }), isVisualRefresh: isVisualRefresh, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled, columnDefinitions: [
            {
                id: 'ID',
                header: i18n('i18nStrings.columnVersionID', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnVersionID', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID)),
                sortingField: 'VersionId',
                cell: item => item.VersionId,
                minWidth: '250px',
            },
            {
                id: 'LastModified',
                header: i18n('i18nStrings.columnVersionLastModified', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnVersionLastModified', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified)),
                sortingComparator: (a, b) => compareDates(a.LastModified, b.LastModified),
                cell: item => formatDefault(item.LastModified),
            },
            {
                id: 'Size',
                header: i18n('i18nStrings.columnVersionSize', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize),
                ariaLabel: getColumnAriaLabel(i18n, i18nStrings, i18n('i18nStrings.columnVersionSize', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize)),
                sortingField: 'Size',
                cell: item => formatSize(item.Size),
            },
        ], onSelect: item => { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.VersionId) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=versions-table.js.map