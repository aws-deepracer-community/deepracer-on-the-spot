"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../token-group/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/token-list/styles.selectors.js");
const token_1 = require("./token");
class TokenGroupWrapper extends dom_1.ComponentWrapper {
    findTokens() {
        return this.findAllByClassName(token_1.default.rootSelector).map(tokenElement => new token_1.default(tokenElement.getElement()));
    }
    /**
     * Returns a token from the group for a given index.
     *
     * @param tokenIndex 1-based index of the token to return.
     */
    findToken(tokenIndex) {
        return this.findComponent(`.${styles_selectors_js_2.default['list-item']}:nth-child(${tokenIndex}) > .${token_1.default.rootSelector}`, token_1.default);
    }
    /**
     * Returns the token toggle button.
     */
    findTokenToggle() {
        return this.findByClassName(styles_selectors_js_2.default.toggle);
    }
}
exports.default = TokenGroupWrapper;
TokenGroupWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map