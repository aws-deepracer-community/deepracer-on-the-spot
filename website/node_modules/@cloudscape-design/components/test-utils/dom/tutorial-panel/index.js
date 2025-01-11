"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../tutorial-panel/styles.selectors.js");
const styles_selectors_js_2 = require("../../../tutorial-panel/components/tutorial-list/styles.selectors.js");
const styles_selectors_js_3 = require("../../../tutorial-panel/components/tutorial-detail-view/styles.selectors.js");
const link_1 = require("../link");
const tutorial_1 = require("./tutorial");
const button_1 = require("../button");
const expandable_section_1 = require("../expandable-section");
class TutorialPanelWrapper extends dom_1.ComponentWrapper {
    findTutorials() {
        return this.findAllByClassName(styles_selectors_js_2.default['tutorial-box']).map(item => new tutorial_1.default(item.getElement()));
    }
    findDownloadLink() {
        return this.findComponent(`.${styles_selectors_js_2.default['download-link']}`, link_1.default);
    }
    findTaskList() {
        return this.findAllByClassName(styles_selectors_js_3.default.task).map(item => new TutorialTaskWrapper(item.getElement()));
    }
    findDismissButton() {
        return this.findComponent(`.${styles_selectors_js_3.default['dismiss-button']}`, button_1.default);
    }
    findCompletionScreenTitle() {
        return this.findByClassName(styles_selectors_js_3.default['completion-screen-title']);
    }
    findCompletionScreenDescription() {
        return this.findByClassName(styles_selectors_js_3.default['completion-screen-description']);
    }
    findFeedbackLink() {
        return this.findComponent(`.${styles_selectors_js_3.default['feedback-link']}`, link_1.default);
    }
}
exports.default = TutorialPanelWrapper;
TutorialPanelWrapper.rootSelector = styles_selectors_js_1.default['tutorial-panel'];
class TutorialTaskWrapper extends dom_1.ComponentWrapper {
    findTitle() {
        return this.findByClassName(styles_selectors_js_3.default['task-title']);
    }
    findStepsTitle() {
        return this.findComponent(`.${styles_selectors_js_3.default['expandable-section-wrapper']}`, expandable_section_1.default).findHeader();
    }
    findSteps() {
        return this.findAllByClassName(styles_selectors_js_3.default['step-title']);
    }
}
//# sourceMappingURL=index.js.map