"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../progress-bar/styles.selectors.js");
class ProgressBarWrapper extends selectors_1.ComponentWrapper {
    findPercentageText() {
        return this.findByClassName(styles_selectors_js_1.default.percentage);
    }
    findResultButton() {
        var _a;
        return ((_a = this.findByClassName(styles_selectors_js_1.default['result-button'])) === null || _a === void 0 ? void 0 : _a.findButton()) || null;
    }
    /**
     * Returns the result text.
     *
     * @param status
     *
     * [optional] Status of the result text. It can be aither "error" or "succes".
     * If not specified, the method returns the result text that is currently displayed, independently of the result status.
     */
    findResultText(status) {
        const statusClassName = status ? `.${styles_selectors_js_1.default[`result-container-${status}`]} ` : '';
        return this.find(`${statusClassName}.${styles_selectors_js_1.default['result-text']}`);
    }
}
exports.default = ProgressBarWrapper;
ProgressBarWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map