// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { getTrackableValue } from '../utils';
export const SELECTION_ITEM = 'selection-item';
export const SELECTION_ROOT = 'selection-root';
// A set, that compares items by their "trackables" (the results of applying `trackBy` to them)
export class ItemSet {
    constructor(trackBy, items) {
        this.map = new Map();
        this.put = (item) => this.map.set.call(this.map, getTrackableValue(this.trackBy, item), item);
        this.has = (item) => this.map.has.call(this.map, getTrackableValue(this.trackBy, item));
        this.forEach = this.map.forEach.bind(this.map);
        this.trackBy = trackBy;
        items.forEach(this.put);
    }
}
export const focusMarkers = {
    item: { ['data-' + SELECTION_ITEM]: 'item' },
    all: { ['data-' + SELECTION_ITEM]: 'all' },
    root: { ['data-' + SELECTION_ROOT]: 'true' },
};
//# sourceMappingURL=utils.js.map