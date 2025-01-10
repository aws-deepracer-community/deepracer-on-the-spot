import { KeyCode } from '../../keycode';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { isCommand, isDigit } from './utils/keys';
import { backspaceHandler, keyHandler, enterHandler } from './keyboard-handler';
const onAutoComplete = (value, onChange, maskFormat) => {
    // Do not autocomplete if input is empty
    if (!value) {
        return;
    }
    const autoCompletedValue = maskFormat.autoComplete(value);
    if (autoCompletedValue !== value) {
        onChange(autoCompletedValue);
    }
};
const preventDefault = (event, result) => result && event.preventDefault();
const useMask = ({ value = '', onBlur, onChange, onKeyDown, format, inputRef, autofix = false, disableAutocompleteOnBlur = false, setPosition, }) => {
    if (!format.isValid(value)) {
        warnOnce('useMask', `Invalid string "${value}" provided`);
    }
    const onMaskChange = (updatedValue) => {
        const autofixedUpdatedValue = autofix ? format.correctMinMaxValues(updatedValue) : updatedValue;
        if (autofixedUpdatedValue === value || !format.isValid(autofixedUpdatedValue)) {
            return;
        }
        onChange(autofixedUpdatedValue);
    };
    const initialValue = autofix ? format.correctMinMaxValues(value) : value;
    const maskedValue = format.getValidValue(initialValue);
    return {
        value: maskedValue,
        onKeyDown: (event) => {
            var _a, _b;
            const selectionStart = ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0;
            const selectionEnd = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionEnd) || 0;
            let result;
            const { keyCode, key, ctrlKey, metaKey } = event.detail;
            if (isDigit(key) || format.isSeparator(key)) {
                result = keyHandler(maskedValue, key, format, selectionStart, selectionEnd);
                preventDefault(event, result);
            }
            else if (keyCode === KeyCode.backspace) {
                result = backspaceHandler(maskedValue, format, selectionStart, selectionEnd);
                preventDefault(event, result);
            }
            else if (keyCode === KeyCode.enter) {
                result = enterHandler(maskedValue, format);
            }
            else if (!isCommand(keyCode, ctrlKey, metaKey)) {
                event.preventDefault();
            }
            if (result) {
                const { value, position } = result;
                onMaskChange(value);
                setPosition(position);
            }
            // Proxy original event
            onKeyDown && onKeyDown(event);
        },
        onChange: ({ detail }) => onMaskChange(detail.value),
        onBlur: () => {
            if (!disableAutocompleteOnBlur) {
                onAutoComplete(maskedValue, onChange, format);
            }
            onBlur && onBlur();
        },
        onPaste: (event) => {
            var _a, _b;
            const text = (event.clipboardData || window.clipboardData).getData('text');
            const selectionStart = ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0;
            const selectionEnd = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionEnd) || 0;
            const formattedText = format.formatPastedText(text, maskedValue, selectionStart, selectionEnd);
            onMaskChange(formattedText);
        },
    };
};
export default useMask;
//# sourceMappingURL=use-mask.js.map