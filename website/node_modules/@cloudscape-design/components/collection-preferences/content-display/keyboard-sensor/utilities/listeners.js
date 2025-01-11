// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export class Listeners {
    constructor(target) {
        this.target = target;
        this.listeners = [];
        this.removeAll = () => {
            this.listeners.forEach(listener => { var _a; return (_a = this.target) === null || _a === void 0 ? void 0 : _a.removeEventListener(...listener); });
        };
    }
    add(eventName, handler, options) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, handler, options);
        this.listeners.push([eventName, handler, options]);
    }
}
//# sourceMappingURL=listeners.js.map