import React from 'react';
import { PaginationProps } from '../../pagination/interfaces';
import { TableProps } from '../../table/interfaces';
import { ForwardFocusRef } from '../../internal/hooks/forward-focus';
import { S3ResourceSelectorProps } from '../interfaces';
import { ComponentFormatFunction } from '../../i18n/context';
interface BasicS3TableStrings<T> {
    labelRefresh?: string;
    labelsPagination?: PaginationProps.Labels;
    header?: string;
    loadingText?: string;
    filteringPlaceholder?: string;
    filteringAriaLabel?: string;
    filteringClearAriaLabel?: string;
    filteringCounterText?: S3ResourceSelectorProps.I18nStrings['filteringCounterText'];
    emptyText?: string;
    noMatchTitle?: string;
    noMatchSubtitle?: string;
    clearFilterButtonText?: string;
    selectionLabels?: TableProps.AriaLabels<T>;
}
interface BasicS3TableProps<T> {
    forwardFocusRef: React.Ref<ForwardFocusRef>;
    columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<T>>;
    fetchData: () => Promise<ReadonlyArray<T>>;
    trackBy: TableProps.TrackBy<T>;
    i18nStrings: BasicS3TableStrings<T>;
    isVisualRefresh?: boolean;
    visibleColumns: ReadonlyArray<string>;
    isItemDisabled: TableProps.IsItemDisabled<T> | undefined;
    onSelect: (item: T | undefined) => void;
}
export declare function getSharedI18Strings(i18n: ComponentFormatFunction<'s3-resource-selector'>, i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined): {
    filteringCounterText: ((count: number) => string) | undefined;
    labelRefresh: string | undefined;
    labelsPagination: PaginationProps.Labels | undefined;
    noMatchTitle: string | undefined;
    noMatchSubtitle: string | undefined;
    clearFilterButtonText: string | undefined;
    filteringClearAriaLabel: string | undefined;
};
export declare function BasicS3Table<T>({ forwardFocusRef, columnDefinitions, fetchData, trackBy, i18nStrings, isVisualRefresh, visibleColumns, isItemDisabled, onSelect, }: BasicS3TableProps<T>): JSX.Element;
export {};
//# sourceMappingURL=basic-table.d.ts.map