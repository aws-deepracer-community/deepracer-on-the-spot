// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Ignoring as unsupported in JSDom.
/* istanbul ignore next */
export function getTextWidth(textNode) {
    if (textNode.getComputedTextLength) {
        return textNode.getComputedTextLength();
    }
    return -1;
}
//# sourceMappingURL=responsive-text-utils.js.map