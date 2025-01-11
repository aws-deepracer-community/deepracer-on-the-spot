"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeEditorRowWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../attribute-editor/styles.selectors.js");
const styles_selectors_js_2 = require("../../../grid/styles.selectors.js");
const button_1 = require("../button");
const form_field_1 = require("../form-field");
class AttributeEditorRowWrapper extends selectors_1.ElementWrapper {
    /**
     * Returns all fields. Fields are supplied in the `definition` property of the component.
     */
    findFields() {
        return this.findAllByClassName(styles_selectors_js_1.default.field).map(f => new form_field_1.default(f.getElement()));
    }
    /**
     * Returns a field for a given index
     *
     * @param column 1-based column index
     */
    findField(column) {
        return this.findComponent(`.${styles_selectors_js_1.default['row-control']} > .${styles_selectors_js_2.default.grid} > .${styles_selectors_js_2.default['grid-column']}:nth-child(${column}) > div > .${styles_selectors_js_1.default.field}`, form_field_1.default);
    }
    findRemoveButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['remove-button']}`, button_1.default);
    }
}
exports.AttributeEditorRowWrapper = AttributeEditorRowWrapper;
class AttributeEditorWrapper extends selectors_1.ComponentWrapper {
    findEmptySlot() {
        return this.findByClassName(styles_selectors_js_1.default.empty);
    }
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row) {
        return this.findComponent(`.${styles_selectors_js_1.default.row}:nth-child(${row})`, AttributeEditorRowWrapper);
    }
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows() {
        return this.findAllByClassName(styles_selectors_js_1.default.row).map(i => new AttributeEditorRowWrapper(i.getElement()));
    }
    findAddButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['add-button']}`, button_1.default);
    }
    findAdditionalInfo() {
        return this.findByClassName(styles_selectors_js_1.default['additional-info']);
    }
}
exports.default = AttributeEditorWrapper;
AttributeEditorWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map