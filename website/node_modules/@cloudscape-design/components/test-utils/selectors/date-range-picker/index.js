"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrpDropdownWrapper = exports.SelectionModeSwitchWrapper = void 0;
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../date-range-picker/styles.selectors.js");
const styles_selectors_js_2 = require("../../../date-range-picker/calendar/grids/styles.selectors.js");
const styles_selectors_js_3 = require("../../../date-range-picker/relative-range/styles.selectors.js");
const select_1 = require("../select");
const button_1 = require("../button");
const radio_group_1 = require("../radio-group");
const input_1 = require("../input");
const segmented_control_1 = require("../segmented-control");
class DateRangePickerWrapper extends selectors_1.ComponentWrapper {
    /**
     * Alias for `findTrigger`
     * @deprecated
     */
    findLabel() {
        return this.findTrigger();
    }
    /**
     * Returns the trigger element that can be used to open the picker dropdown.
     */
    findTrigger() {
        return this.findByClassName(styles_selectors_js_1.default.label);
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options = {
        expandToViewport: false
    }) {
        const wrapper = options.expandToViewport ? (0, selectors_1.createWrapper)() : this;
        return wrapper.findComponent(`.${styles_selectors_js_1.default.dropdown}`, DrpDropdownWrapper);
    }
}
exports.default = DateRangePickerWrapper;
DateRangePickerWrapper.rootSelector = styles_selectors_js_1.default.root;
class SelectionModeSwitchWrapper extends selectors_1.ElementWrapper {
    /**
     * Returns the mode selector as a SegmentedControl wrapper.
     *
     * The mode selector is only rendered as a SegmentedControl on wide viewports. On narrow viewports, use `findModesAsSelect()` instead.
     */
    findModesAsSegments() {
        return new segmented_control_1.default(this.getElement());
    }
    /**
     * Returns the mode selector as a Select wrapper.
     * The mode selector is only rendered as a Select on narrow viewports. On wide viewports, use `findModesAsSegments()` instead.
     */
    findModesAsSelect() {
        return new select_1.default(this.getElement());
    }
}
exports.SelectionModeSwitchWrapper = SelectionModeSwitchWrapper;
class DrpDropdownWrapper extends selectors_1.ComponentWrapper {
    findSelectionModeSwitch() {
        return this.findComponent(`.${styles_selectors_js_1.default['mode-switch']}`, SelectionModeSwitchWrapper);
    }
    findValidationError() {
        return this.findByClassName(styles_selectors_js_1.default['validation-error']);
    }
    // -- Relative mode --
    findRelativeRangeRadioGroup() {
        return this.findComponent(`.${styles_selectors_js_3.default['relative-range-radio-group']}`, radio_group_1.default);
    }
    findCustomRelativeRangeDuration() {
        return this.findComponent(`.${styles_selectors_js_3.default['custom-range-duration-input']}`, input_1.default);
    }
    findCustomRelativeRangeUnit() {
        return this.findComponent(`.${styles_selectors_js_3.default['custom-range-unit-select']}`, select_1.default);
    }
    // -- Absolute mode --
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default['calendar-header']);
    }
    findPreviousMonthButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['calendar-prev-month-btn']}`, button_1.default);
    }
    findNextMonthButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['calendar-next-month-btn']}`, button_1.default);
    }
    /**
     * Returns a day container on the calendar.
     *
     * @param grid the calendar grid. If only one calendar grid is visible (on small screens), use `'right'`.
     * @param row 1-based row index of the day.
     * @param column 1-based column index of the day.
     */
    findDateAt(grid, row, column) {
        const gridClassName = grid === 'right' ? styles_selectors_js_1.default['second-grid'] : styles_selectors_js_1.default['first-grid'];
        return this.find(`.${gridClassName} .${styles_selectors_js_2.default.week}:nth-child(${row}) .${styles_selectors_js_2.default.day}:nth-child(${column})`);
    }
    findSelectedStartDate() {
        return this.findByClassName(styles_selectors_js_2.default['start-date']);
    }
    findSelectedEndDate() {
        return this.findByClassName(styles_selectors_js_2.default['end-date']);
    }
    findStartDateInput() {
        return this.findComponent(`.${styles_selectors_js_1.default['start-date-input']}`, input_1.default);
    }
    findStartTimeInput() {
        return this.findComponent(`.${styles_selectors_js_1.default['start-time-input']}`, input_1.default);
    }
    findEndDateInput() {
        return this.findComponent(`.${styles_selectors_js_1.default['end-date-input']}`, input_1.default);
    }
    findEndTimeInput() {
        return this.findComponent(`.${styles_selectors_js_1.default['end-time-input']}`, input_1.default);
    }
    // -- Footer --
    findClearButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['clear-button']}`, button_1.default);
    }
    findCancelButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['cancel-button']}`, button_1.default);
    }
    findApplyButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['apply-button']}`, button_1.default);
    }
}
exports.DrpDropdownWrapper = DrpDropdownWrapper;
//# sourceMappingURL=index.js.map