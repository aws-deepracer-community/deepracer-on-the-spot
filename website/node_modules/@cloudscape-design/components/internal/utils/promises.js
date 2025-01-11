// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export class PromiseCancelledSignal {
}
/**
 * Wrap and provide a handle for a promise to provide cancellation information inside
 * callbacks. Takes a similar approach to how an AbortController works in modern fetch.
 *
 * @see https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */
export function makeCancellable(promise) {
    let cancelled = false;
    const wrapped = promise.then(value => {
        if (cancelled) {
            throw new PromiseCancelledSignal();
        }
        return value;
    }, err => {
        if (cancelled) {
            throw new PromiseCancelledSignal();
        }
        throw err;
    });
    return {
        promise: wrapped,
        cancel: () => {
            cancelled = true;
        },
        isCancelled: () => cancelled,
    };
}
//# sourceMappingURL=promises.js.map