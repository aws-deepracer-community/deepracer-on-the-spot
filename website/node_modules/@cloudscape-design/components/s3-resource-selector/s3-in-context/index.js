// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useEffect, useRef } from 'react';
import InternalBox from '../../box/internal';
import { InternalButton } from '../../button/internal';
import InternalFormField from '../../form-field/internal';
import InternalSelect from '../../select/internal';
import InternalStatusIndicator from '../../status-indicator/internal';
import useForwardFocus from '../../internal/hooks/forward-focus';
import { useVersionsFetch } from './use-versions-fetch';
import { validate, getErrorText } from './validation';
import styles from './styles.css.js';
import { SearchInput } from './search-input';
import LiveRegion from '../../internal/components/live-region';
import { useInternalI18n } from '../../i18n/context';
export const S3InContext = React.forwardRef(({ i18nStrings, inputPlaceholder, resource, viewHref, invalid, inputAriaDescribedby, selectableItemsTypes, fetchVersions, onChange, onBrowse, }, ref) => {
    const i18n = useInternalI18n('s3-resource-selector');
    const isInputBlurredRef = useRef(true);
    const [isInputTouched, setInputTouched] = useState(false);
    const { versions, loading, loadVersions, resetVersions } = useVersionsFetch(fetchVersions);
    const inputRef = useRef(null);
    useForwardFocus(ref, inputRef);
    const uri = resource.uri;
    const supportsVersions = selectableItemsTypes && selectableItemsTypes.indexOf('versions') > -1;
    const selectedVersion = versions.filter(version => version.value === resource.versionId)[0] || null;
    function handleUriChange(event) {
        const uri = event.detail.value;
        const errorCode = isInputTouched ? validate(uri) : undefined;
        resetVersions();
        onChange({ uri }, getErrorText(i18n, i18nStrings, errorCode));
    }
    function handleUriBlur() {
        isInputBlurredRef.current = true;
        setInputTouched(true);
        const errorCode = validate(resource.uri);
        onChange(resource, getErrorText(i18n, i18nStrings, errorCode));
        if (supportsVersions) {
            loadVersions(resource.uri);
        }
    }
    useEffect(() => {
        var _a;
        if (!isInputBlurredRef.current || !supportsVersions) {
            return;
        }
        const { cancel } = (_a = loadVersions(uri)) !== null && _a !== void 0 ? _a : {};
        return cancel;
    }, [uri, supportsVersions, loadVersions]);
    return (React.createElement("div", { className: styles.root },
        React.createElement("div", { className: styles.layout },
            React.createElement(InternalFormField, { className: styles['layout-uri'], label: i18n('i18nStrings.inContextUriLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextUriLabel), stretch: true },
                React.createElement(SearchInput, { ref: inputRef, value: uri, ariaDescribedby: inputAriaDescribedby, clearAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextInputClearAriaLabel, placeholder: inputPlaceholder !== null && inputPlaceholder !== void 0 ? inputPlaceholder : i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextInputPlaceholder, onChange: handleUriChange, invalid: invalid, onFocus: () => (isInputBlurredRef.current = false), onBlur: handleUriBlur })),
            supportsVersions && (React.createElement(InternalFormField, { className: styles['layout-version'], label: i18n('i18nStrings.inContextVersionSelectLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextVersionSelectLabel), stretch: true },
                React.createElement(InternalSelect, { selectedOption: selectedVersion, placeholder: i18n('i18nStrings.inContextSelectPlaceholder', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextSelectPlaceholder), disabled: versions.length === 0, options: versions, onChange: event => onChange(Object.assign(Object.assign({}, resource), { versionId: event.detail.selectedOption.value }), undefined), invalid: false }))),
            React.createElement("div", null,
                React.createElement(InternalButton, { className: styles['view-button'], disabled: !viewHref, href: viewHref, target: "_blank", iconName: "external", iconAlign: "right", formAction: "none", ariaLabel: i18n('i18nStrings.inContextViewButtonAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextViewButtonAriaLabel) }, i18n('i18nStrings.inContextViewButton', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextViewButton))),
            React.createElement("div", { className: styles['layout-divider'] }),
            React.createElement("div", null,
                React.createElement(InternalButton, { className: styles['browse-button'], disabled: loading, formAction: "none", onClick: onBrowse }, i18n('i18nStrings.inContextBrowseButton', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextBrowseButton)))),
        React.createElement("div", { role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, loading && (React.createElement(InternalBox, { margin: { top: 's' } },
            React.createElement(InternalStatusIndicator, { type: "loading" },
                React.createElement(LiveRegion, { visible: true }, i18n('i18nStrings.inContextLoadingText', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inContextLoadingText))))))));
});
//# sourceMappingURL=index.js.map