"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../tutorial-panel/components/tutorial-list/styles.selectors.js");
const button_1 = require("../button");
const index_js_1 = require("../index.js");
const link_1 = require("../link");
class TutorialItemWrapper extends dom_1.ComponentWrapper {
    findStartButton() {
        return this.findComponent(`.${styles_selectors_js_1.default.start}`, button_1.default);
    }
    findLearnMoreLink() {
        return this.findComponent(`.${styles_selectors_js_1.default['learn-more-link']}`, link_1.default);
    }
    findExpandButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['expand-button']}`, button_1.default);
    }
    findCollapseButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['collapse-button']}`, button_1.default);
    }
    findDescription() {
        return this.findByClassName(styles_selectors_js_1.default['tutorial-description']);
    }
    findTitle() {
        return this.findByClassName(styles_selectors_js_1.default.title);
    }
    findCompleted() {
        return this.findByClassName(styles_selectors_js_1.default.completed);
    }
    findPrerequisitesAlert() {
        return this.findComponent(`.${styles_selectors_js_1.default['prerequisites-alert']}`, index_js_1.AlertWrapper);
    }
}
exports.default = TutorialItemWrapper;
TutorialItemWrapper.rootSelector = styles_selectors_js_1.default['tutorial-box'];
//# sourceMappingURL=tutorial.js.map