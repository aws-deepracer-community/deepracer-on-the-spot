"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
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
    findCalendar(options = { expandToViewport: false }) {
        const wrapper = options.expandToViewport ? (0, dom_1.createWrapper)() : this;
        return wrapper.findComponent(`.${styles_selectors_js_2.default.root}`, calendar_1.default);
    }
    findCalendarDropdown() {
        const dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    }
    findOpenCalendarButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['open-calendar-button']}`, button_1.default);
    }
    /**
     * Sets the value of the component and calls the `onChange` handler.
     * The value needs to use the "YYYY/MM/DD" format,
     * but the subsequent `onChange` handler will contain the value in the "YYYY-MM-DD" format.
     *
     * @param value The value the input is set to, using the "YYYY/MM/DD" format.
     */
    setInputValue(value) {
        return super.setInputValue(value);
    }
}
DatePickerWrapper.rootSelector = styles_selectors_js_1.default.root;
__decorate([
    dom_1.usesDom
], DatePickerWrapper.prototype, "setInputValue", null);
exports.default = DatePickerWrapper;
//# sourceMappingURL=index.js.map