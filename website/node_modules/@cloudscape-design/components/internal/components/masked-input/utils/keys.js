// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { KeyCode } from '../../../keycode';
const isSpecialCommand = (keyCode) => {
    return keyCode > 7 && keyCode < 47 && keyCode !== KeyCode.space;
};
const isClipboardCommand = (ctrlKey, metaKey) => ctrlKey || metaKey;
export const isCommand = (keyCode, ctrlKey, metaKey) => isSpecialCommand(keyCode) || isClipboardCommand(ctrlKey, metaKey);
export const isDigit = (char) => !isNaN(parseInt(char, 10));
//# sourceMappingURL=keys.js.map