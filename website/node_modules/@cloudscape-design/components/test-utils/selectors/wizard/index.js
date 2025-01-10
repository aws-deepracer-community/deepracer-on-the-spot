"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_selectors_js_1 = require("../../../form/styles.selectors.js");
const styles_selectors_js_2 = require("../../../wizard/styles.selectors.js");
const button_1 = require("../button");
const form_1 = require("../form");
const header_1 = require("../header");
class WizardWrapper extends form_1.default {
    findHeader() {
        return this.findByClassName(styles_selectors_js_2.default['form-header-component']);
    }
    findInfo() {
        return this.findComponent(`.${styles_selectors_js_2.default['form-header']}`, header_1.default).findInfo();
    }
    findCancelButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['cancel-button']}`, button_1.default);
    }
    findSkipToButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['skip-to-button']}`, button_1.default);
    }
    findPreviousButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['previous-button']}`, button_1.default);
    }
    findPrimaryButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['primary-button']}`, button_1.default);
    }
    findMenuNavigationLinks() {
        return this.findAllByClassName(styles_selectors_js_2.default['navigation-link']);
    }
    /**
     * Returns a link for a given step number.
     *
     * @param stepNumber 1-based step index
     * @param state
     *
     * [optional] State of the link. The method returns null if the specified step does not match the state. It can be
     *  - "disabled": for disabled menu entries
     *  - "active": for the active menu entry
     *  - undefined: for any entry
     */
    findMenuNavigationLink(stepNumber, state) {
        const additionalClassName = state ? `.${styles_selectors_js_2.default[`navigation-link-${state}`]}` : '';
        return this.find(`.${styles_selectors_js_2.default['navigation-link-item']}:nth-child(${stepNumber}) .${styles_selectors_js_2.default['navigation-link']}${additionalClassName}`);
    }
    findSecondaryActions() {
        return this.findByClassName(styles_selectors_js_1.default['secondary-actions']);
    }
}
exports.default = WizardWrapper;
WizardWrapper.rootSelector = styles_selectors_js_2.default.root;
//# sourceMappingURL=index.js.map