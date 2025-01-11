import React from 'react';
import { S3ResourceSelectorProps } from '../interfaces';
export interface S3ModalProps {
    alert: React.ReactNode;
    selectableItemsTypes: S3ResourceSelectorProps['selectableItemsTypes'];
    fetchBuckets: S3ResourceSelectorProps['fetchBuckets'];
    bucketsVisibleColumns: ReadonlyArray<string>;
    bucketsIsItemDisabled: S3ResourceSelectorProps['bucketsIsItemDisabled'];
    fetchObjects: S3ResourceSelectorProps['fetchObjects'];
    objectsVisibleColumns: ReadonlyArray<string>;
    objectsIsItemDisabled: S3ResourceSelectorProps['objectsIsItemDisabled'];
    fetchVersions: S3ResourceSelectorProps['fetchVersions'];
    versionsVisibleColumns: ReadonlyArray<string>;
    versionsIsItemDisabled: S3ResourceSelectorProps['versionsIsItemDisabled'];
    i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined;
    getModalRoot: S3ResourceSelectorProps['getModalRoot'];
    removeModalRoot: S3ResourceSelectorProps['removeModalRoot'];
    onDismiss: () => void;
    onSubmit: (resource: S3ResourceSelectorProps.Resource) => void;
}
export declare function S3Modal({ i18nStrings, alert, selectableItemsTypes, fetchBuckets, bucketsVisibleColumns, bucketsIsItemDisabled, fetchObjects, objectsVisibleColumns, objectsIsItemDisabled, fetchVersions, versionsVisibleColumns, versionsIsItemDisabled, getModalRoot, removeModalRoot, onSubmit, onDismiss, }: S3ModalProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map