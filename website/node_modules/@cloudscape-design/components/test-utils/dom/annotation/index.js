"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../annotation-context/annotation/styles.selectors.js");
const styles_selectors_js_2 = require("../../../popover/styles.selectors.js");
const button_1 = require("../button");
class AnnotationWrapper extends dom_1.ComponentWrapper {
    findNextButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['next-button']}`, button_1.default);
    }
    findPreviousButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['previous-button']}`, button_1.default);
    }
    findFinishButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['finish-button']}`, button_1.default);
    }
    findStepCounter() {
        return this.findByClassName(styles_selectors_js_1.default['step-counter-content']);
    }
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findDismissButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['dismiss-control']}`, button_1.default);
    }
}
exports.default = AnnotationWrapper;
AnnotationWrapper.rootSelector = styles_selectors_js_1.default.annotation;
//# sourceMappingURL=index.js.map