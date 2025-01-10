// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useLayoutEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { usePrevious } from '../../internal/hooks/use-previous';
export default class AsyncStore {
    constructor(state) {
        this._listeners = [];
        this._state = state;
    }
    get() {
        return this._state;
    }
    set(cb) {
        const prevState = this._state;
        const newState = cb(prevState);
        this._state = newState;
        unstable_batchedUpdates(() => {
            for (const [selector, listener] of this._listeners) {
                if (selector(prevState) !== selector(newState)) {
                    listener(newState, prevState);
                }
            }
        });
    }
    subscribe(selector, listener) {
        this._listeners.push([selector, listener]);
        return () => this.unsubscribe(listener);
    }
    unsubscribe(listener) {
        for (let index = 0; index < this._listeners.length; index++) {
            const [, storedListener] = this._listeners[index];
            if (storedListener === listener) {
                this._listeners.splice(index, 1);
                break;
            }
        }
    }
}
export function useReaction(store, selector, effect) {
    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(selector, (newState, prevState) => effect(selector(newState), selector(prevState)));
        return unsubscribe;
    }, 
    // ignoring selector and effect as they are expected to stay constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store]);
}
export function useSelector(store, selector) {
    const [state, setState] = useState(selector(store.get()));
    useReaction(store, selector, newState => {
        setState(newState);
    });
    // When store changes we need the state to be updated synchronously to avoid inconsistencies.
    const prevStore = usePrevious(store);
    if (prevStore !== null && prevStore !== store) {
        return selector(store.get());
    }
    return state;
}
//# sourceMappingURL=index.js.map