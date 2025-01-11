// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function sortByPriority(items) {
    return items.slice().sort((a, b) => {
        var _a, _b;
        if (b.orderPriority !== a.orderPriority) {
            return Math.sign(((_a = b.orderPriority) !== null && _a !== void 0 ? _a : 0) - ((_b = a.orderPriority) !== null && _b !== void 0 ? _b : 0));
        }
        return b.id < a.id ? 1 : -1;
    });
}
//# sourceMappingURL=utils.js.map