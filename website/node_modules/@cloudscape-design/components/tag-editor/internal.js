// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef, useState } from 'react';
import InternalAutosuggest from '../autosuggest/internal';
import { KeyCode } from '../internal/keycode';
import { makeCancellable, PromiseCancelledSignal } from '../internal/utils/promises';
import styles from './styles.css.js';
export const TagControl = React.forwardRef(({ row, value, readOnly, defaultOptions, placeholder, errorText, loadingText, suggestionText, tooManySuggestionText, limit, filteringKey, enteredTextLabel, clearAriaLabel, onChange, onBlur, onRequest, initialOptionsRef, }, ref) => {
    const [options, setOptions] = useState(defaultOptions);
    const [statusType, setStatusType] = useState();
    const requestCancelFnRef = useRef({
        cancel: () => { },
        isCancelled: () => false,
    });
    const latestFilteringQuery = useRef({ key: undefined, value: undefined });
    const isSameQuery = (key, value) => latestFilteringQuery.current.key === key && latestFilteringQuery.current.value === value;
    const onLoadItems = (filteringText) => {
        if (!onRequest || isSameQuery(filteringKey, filteringText) || requestCancelFnRef.current.isCancelled()) {
            return;
        }
        requestCancelFnRef.current.cancel();
        if (latestFilteringQuery.current.key !== filteringKey) {
            // Reset suggestions for values if the key is different.
            setOptions([]);
        }
        else if (filteringText === '' && (initialOptionsRef === null || initialOptionsRef === void 0 ? void 0 : initialOptionsRef.current) && initialOptionsRef.current.length > 0) {
            // Load in the background, if the value is empty and we already have suggestions.
            setOptions(initialOptionsRef.current);
        }
        setStatusType('loading');
        latestFilteringQuery.current = { key: filteringKey, value: filteringText };
        const { promise, cancel, isCancelled } = makeCancellable(onRequest(filteringText));
        promise
            .then(newValues => {
            const newOptions = newValues.map(value => ({ value }));
            setStatusType(undefined);
            setOptions(newOptions);
            if (initialOptionsRef) {
                initialOptionsRef.current = newOptions;
            }
        })
            .catch(err => {
            if (!(err instanceof PromiseCancelledSignal)) {
                setStatusType('error');
            }
        });
        requestCancelFnRef.current = { cancel, isCancelled };
    };
    return (React.createElement(InternalAutosuggest, { ref: ref, value: value, readOnly: readOnly, statusType: statusType, options: options.length < limit ? options : [], empty: options.length < limit ? suggestionText : tooManySuggestionText, placeholder: placeholder, errorText: errorText, loadingText: loadingText, enteredTextLabel: enteredTextLabel, clearAriaLabel: clearAriaLabel, onChange: ({ detail }) => onChange(detail.value, row), onBlur: () => onBlur === null || onBlur === void 0 ? void 0 : onBlur(row), onFocus: () => {
            onLoadItems('');
        }, onLoadItems: ({ detail }) => {
            onLoadItems(detail.filteringText);
        } }));
});
export const UndoButton = React.forwardRef(({ children, onClick }, ref) => {
    return (React.createElement("a", { ref: ref, role: "button", tabIndex: 0, className: styles['undo-button'], onClick: onClick, onKeyDown: event => {
            if (event.keyCode === KeyCode.space || event.keyCode === KeyCode.enter) {
                event.preventDefault();
            }
            // Enter activates the button on key down instead of key up.
            if (event.keyCode === KeyCode.enter) {
                onClick();
            }
        }, onKeyUp: event => {
            // Emulate button behavior, which also fires on space.
            if (event.keyCode === KeyCode.space) {
                onClick();
            }
        } }, children));
});
//# sourceMappingURL=internal.js.map