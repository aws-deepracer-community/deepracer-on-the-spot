import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { useUniqueId } from '../../hooks/use-unique-id';
function joinString(values) {
    return values.filter((value) => !!value).join(' ');
}
export default function AbstractSwitch(_a) {
    var { controlId, controlClassName, outlineClassName, showOutline, disabled, nativeControl, styledControl, label, description, descriptionBottomPadding, ariaLabel, ariaLabelledby, ariaDescribedby, ariaControls, onClick, __internalRootRef } = _a, rest = __rest(_a, ["controlId", "controlClassName", "outlineClassName", "showOutline", "disabled", "nativeControl", "styledControl", "label", "description", "descriptionBottomPadding", "ariaLabel", "ariaLabelledby", "ariaDescribedby", "ariaControls", "onClick", "__internalRootRef"]);
    const uniqueId = useUniqueId();
    const id = controlId || uniqueId;
    const labelId = `${id}-label`;
    const descriptionId = `${id}-description`;
    const ariaLabelledByIds = [];
    if (label && !ariaLabel) {
        ariaLabelledByIds.push(labelId);
    }
    if (ariaLabelledby) {
        ariaLabelledByIds.push(ariaLabelledby);
    }
    const ariaDescriptions = [];
    if (ariaDescribedby) {
        ariaDescriptions.push(ariaDescribedby);
    }
    if (description) {
        ariaDescriptions.push(descriptionId);
    }
    return (React.createElement("span", Object.assign({}, rest, { className: clsx(styles.wrapper, rest.className), ref: __internalRootRef }),
        React.createElement("span", { className: styles['label-wrapper'], "aria-disabled": disabled ? 'true' : undefined, onClick: disabled ? undefined : onClick },
            React.createElement("span", { className: clsx(styles.control, controlClassName) },
                styledControl,
                nativeControl({
                    id,
                    disabled,
                    className: styles['native-input'],
                    'aria-describedby': ariaDescriptions.length ? joinString(ariaDescriptions) : undefined,
                    'aria-labelledby': ariaLabelledByIds.length ? joinString(ariaLabelledByIds) : undefined,
                    'aria-label': ariaLabel,
                    'aria-controls': ariaControls,
                }),
                React.createElement("span", { className: clsx(styles.outline, outlineClassName, showOutline && styles['show-outline']) })),
            React.createElement("span", { className: clsx(styles.content, !label && !description && styles['empty-content']) },
                label && (React.createElement("span", { id: labelId, className: clsx(styles.label, { [styles['label-disabled']]: disabled }) }, label)),
                description && (React.createElement("span", { id: descriptionId, className: clsx(styles.description, {
                        [styles['description-disabled']]: disabled,
                        [styles['description-bottom-padding']]: descriptionBottomPadding,
                    }) }, description))))));
}
//# sourceMappingURL=index.js.map