"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardWrapper = exports.CardSectionWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../cards/styles.selectors.js");
const styles_selectors_js_2 = require("../../../table/styles.selectors.js");
const collection_preferences_1 = require("../collection-preferences");
const container_1 = require("../container");
const pagination_1 = require("../pagination");
const text_filter_1 = require("../text-filter");
class CardSectionWrapper extends selectors_1.ComponentWrapper {
    findSectionHeader() {
        return this.findByClassName(styles_selectors_js_1.default['section-header']);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default['section-content']);
    }
}
exports.CardSectionWrapper = CardSectionWrapper;
class CardWrapper extends selectors_1.ComponentWrapper {
    /**
     * Note: for integration/selector-based tests you should add `1` to the expected section index,
     * for example, `.findSections().get(sectionIndex+1)`. The `get` call in this context
     * is '2-indexed', that is, the first section in a card has an index of `2`.
     */
    findSections() {
        return this.findAllByClassName(styles_selectors_js_1.default.section).map(c => new CardSectionWrapper(c.getElement()));
    }
    findCardHeader() {
        return this.findByClassName(styles_selectors_js_1.default['card-header-inner']);
    }
    findSelectionArea() {
        return this.findByClassName(`${styles_selectors_js_1.default['selection-control']} label`);
    }
}
exports.CardWrapper = CardWrapper;
class CardsWrapper extends selectors_1.ComponentWrapper {
    constructor() {
        super(...arguments);
        this.containerWrapper = new container_1.default(this.getElement());
    }
    findItems() {
        return this.findAllByClassName(styles_selectors_js_1.default.card).map(c => new CardWrapper(c.getElement()));
    }
    findSelectedItems() {
        return this.findAllByClassName(styles_selectors_js_1.default['card-selected']).map(c => new CardWrapper(c.getElement()));
    }
    findHeader() {
        return this.containerWrapper.findHeader();
    }
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion() {
        return this.findHeader();
    }
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion() {
        return this.findEmptySlot();
    }
    findEmptySlot() {
        return this.findByClassName(styles_selectors_js_1.default.empty);
    }
    findLoadingText() {
        return this.findByClassName(styles_selectors_js_1.default.loading);
    }
    findTextFilter() {
        return this.findComponent(`.${styles_selectors_js_2.default['tools-filtering']}`, text_filter_1.default);
    }
    findPagination() {
        return this.findComponent(`.${styles_selectors_js_2.default['tools-pagination']}`, pagination_1.default);
    }
    findCollectionPreferences() {
        return this.findComponent(`.${styles_selectors_js_2.default['tools-preferences']}`, collection_preferences_1.default);
    }
}
exports.default = CardsWrapper;
CardsWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map