"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../expandable-section/styles.selectors.js");
const styles_selectors_js_2 = require("../../../container/styles.selectors.js");
const styles_selectors_js_3 = require("../../../header/styles.selectors.js");
class ExpandableSectionWrapper extends dom_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    /*
     * Returns the area that can be clicked in order to expand or collapse the section.
     */
    findExpandButton() {
        return this.findByClassName(styles_selectors_js_1.default['expand-button']);
    }
    findExpandedContent() {
        return this.find(`:scope > .${styles_selectors_js_1.default['content-expanded']}, :scope > .${styles_selectors_js_2.default['content-wrapper']} > .${styles_selectors_js_2.default.content} > .${styles_selectors_js_1.default['content-expanded']}`);
    }
    findExpandIcon() {
        return this.findByClassName(styles_selectors_js_1.default['icon-container']);
    }
    findHeaderText() {
        return this.findByClassName(styles_selectors_js_1.default['header-text']);
    }
    findHeaderDescription() {
        return this.findByClassName(styles_selectors_js_3.default.description);
    }
}
exports.default = ExpandableSectionWrapper;
ExpandableSectionWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map