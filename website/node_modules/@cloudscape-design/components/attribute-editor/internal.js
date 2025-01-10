import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useImperativeHandle, useRef, useState } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { InternalButton } from '../button/internal';
import { AdditionalInfo } from './additional-info';
import { Row } from './row';
import styles from './styles.css.js';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import InternalBox from '../box/internal';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { usePrevious } from '../internal/hooks/use-previous';
import LiveRegion from '../internal/components/live-region';
const InternalAttributeEditor = React.forwardRef((_a, ref) => {
    var { additionalInfo, disableAddButton, definition, items, isItemRemovable = () => true, empty, addButtonText, removeButtonText, removeButtonAriaLabel, i18nStrings, onAddButtonClick, onRemoveButtonClick, __internalRootRef = null } = _a, props = __rest(_a, ["additionalInfo", "disableAddButton", "definition", "items", "isItemRemovable", "empty", "addButtonText", "removeButtonText", "removeButtonAriaLabel", "i18nStrings", "onAddButtonClick", "onRemoveButtonClick", "__internalRootRef"]);
    const [breakpoint, breakpointRef] = useContainerBreakpoints(['default', 'xxs', 'xs']);
    const removeButtonRefs = useRef([]);
    const addButtonRef = useRef(null);
    const wasNonEmpty = useRef(false);
    const [removalAnnouncement, setRemovalAnnouncement] = useState('');
    const baseProps = getBaseProps(props);
    const isEmpty = items && items.length === 0;
    wasNonEmpty.current = wasNonEmpty.current || !isEmpty;
    useImperativeHandle(ref, () => ({
        focusRemoveButton(rowIndex) {
            var _a;
            (_a = removeButtonRefs.current[rowIndex]) === null || _a === void 0 ? void 0 : _a.focus();
        },
        focusAddButton() {
            var _a;
            (_a = addButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
    }));
    const mergedRef = useMergeRefs(breakpointRef, __internalRootRef);
    const additionalInfoId = useUniqueId('attribute-editor-info');
    const infoAriaDescribedBy = additionalInfo ? additionalInfoId : undefined;
    const prevItemsLength = usePrevious(items.length);
    React.useEffect(() => {
        if (prevItemsLength && prevItemsLength > items.length && (i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.itemRemovedAriaLive)) {
            setRemovalAnnouncement(i18nStrings.itemRemovedAriaLive);
        }
        else {
            setRemovalAnnouncement('');
        }
        // we only want to announce when the number of items decreases (i.e. when an item is removed)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.itemRemovedAriaLive]);
    return (React.createElement("div", Object.assign({}, baseProps, { ref: mergedRef, className: clsx(baseProps.className, styles.root) }),
        React.createElement(InternalBox, { margin: { bottom: 'l' } },
            isEmpty && React.createElement("div", { className: clsx(styles.empty, wasNonEmpty.current && styles['empty-appear']) }, empty),
            items.map((item, index) => (React.createElement(Row, { key: index, index: index, breakpoint: breakpoint, item: item, definition: definition, i18nStrings: i18nStrings, removable: isItemRemovable(item), removeButtonText: removeButtonText, removeButtonRefs: removeButtonRefs.current, onRemoveButtonClick: onRemoveButtonClick, removeButtonAriaLabel: removeButtonAriaLabel })))),
        React.createElement(InternalButton, { className: styles['add-button'], disabled: disableAddButton, onClick: onAddButtonClick, formAction: "none", ref: addButtonRef, ariaDescribedby: infoAriaDescribedBy }, addButtonText),
        React.createElement(LiveRegion, { "data-testid": "removal-announcement", delay: 5, key: items.length }, removalAnnouncement),
        !!additionalInfo && React.createElement(AdditionalInfo, { id: infoAriaDescribedBy }, additionalInfo)));
});
export default InternalAttributeEditor;
//# sourceMappingURL=internal.js.map