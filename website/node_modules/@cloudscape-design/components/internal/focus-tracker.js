// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { nodeBelongs } from './utils/node-belongs';
export default class FocusTracker {
    constructor(node, { onFocusEnter, onFocusLeave }) {
        this.node = node;
        this.currentlyFocused = false;
        this.focusInListener = (event) => {
            const focusIsInside = nodeBelongs(this.node, event.target);
            if (!this.currentlyFocused && focusIsInside) {
                this.triggerFocus();
            }
        };
        this.focusOutListener = (event) => {
            const nextFocused = event.relatedTarget;
            const isNextFocusedInParent = !nodeBelongs(this.node, nextFocused);
            if (this.currentlyFocused && (nextFocused === null || isNextFocusedInParent)) {
                this.triggerBlur();
            }
        };
        this.onFocusEnter = onFocusEnter;
        this.onFocusLeave = onFocusLeave;
    }
    initialize() {
        this.currentlyFocused = nodeBelongs(this.node, document.activeElement);
        document.addEventListener('focusin', this.focusInListener);
        document.addEventListener('focusout', this.focusOutListener);
    }
    destroy() {
        document.removeEventListener('focusin', this.focusInListener);
        document.removeEventListener('focusout', this.focusOutListener);
    }
    triggerBlur() {
        this.currentlyFocused = false;
        this.onFocusLeave();
    }
    triggerFocus() {
        this.currentlyFocused = true;
        this.onFocusEnter();
    }
}
//# sourceMappingURL=focus-tracker.js.map