"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../date-picker/styles.selectors.js");
const styles_selectors_js_2 = require("../../../calendar/styles.selectors.js");
const button_1 = require("../button");
const calendar_1 = require("../calendar");
const base_input_1 = require("../input/base-input");
const dropdown_1 = require("../internal/dropdown");
class DatePickerWrapper extends base_input_1.default {
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findCalendar(options = {
        expandToViewport: false
    }) {
        const wrapper = options.expandToViewport ? (0, selectors_1.createWrapper)() : this;
        return wrapper.findComponent(`.${styles_selectors_js_2.default.root}`, calendar_1.default);
    }
    findCalendarDropdown() {
        const dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    }
    findOpenCalendarButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['open-calendar-button']}`, button_1.default);
    }
}
exports.default = DatePickerWrapper;
DatePickerWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map