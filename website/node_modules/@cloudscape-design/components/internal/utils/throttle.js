// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function throttle(func, delay, { trailing = true } = {}) {
    let pending = null;
    let lastInvokeTime = null;
    let timerId = null;
    // Runs on every animation frame until timer stopped.
    function pendingFunc() {
        if (pending === null || lastInvokeTime === null) {
            return;
        }
        const invokeTime = Date.now();
        const shouldInvoke = invokeTime - lastInvokeTime >= delay;
        if (shouldInvoke) {
            func.apply(pending.this, pending.args);
            lastInvokeTime = invokeTime;
            pending = null;
            timerId = null;
        }
        else if (trailing) {
            startTimer();
        }
    }
    function startTimer() {
        if (timerId) {
            cancelAnimationFrame(timerId);
        }
        timerId = requestAnimationFrame(pendingFunc);
    }
    // Decorated client function with delay mechanism.
    function throttled(...args) {
        if (lastInvokeTime === null) {
            lastInvokeTime = Date.now();
            func.apply(this, args);
        }
        else {
            pending = { this: this, args };
            startTimer();
        }
    }
    // Prevents delayed function from execution when no longer needed.
    throttled.cancel = () => {
        if (timerId) {
            cancelAnimationFrame(timerId);
        }
        pending = null;
        lastInvokeTime = null;
        timerId = null;
    };
    return throttled;
}
//# sourceMappingURL=throttle.js.map