"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagEditorRowWrapper = void 0;
const styles_selectors_js_1 = require("../../../tag-editor/styles.selectors.js");
const styles_selectors_js_2 = require("../../../attribute-editor/styles.selectors.js");
const link_1 = require("../link");
const attribute_editor_1 = require("../attribute-editor");
class TagEditorRowWrapper extends attribute_editor_1.AttributeEditorRowWrapper {
    findUndoButton() {
        return this.findComponent(`.${styles_selectors_js_1.default['undo-button']}`, link_1.default);
    }
}
exports.TagEditorRowWrapper = TagEditorRowWrapper;
class TagEditorWrapper extends attribute_editor_1.default {
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row) {
        return this.findComponent(`.${styles_selectors_js_2.default.row}:nth-child(${row})`, TagEditorRowWrapper);
    }
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows() {
        return this.findAllByClassName(styles_selectors_js_2.default.row).map(i => new TagEditorRowWrapper(i.getElement()));
    }
    findLoadingText() {
        return this.findByClassName(styles_selectors_js_1.default.loading);
    }
}
exports.default = TagEditorWrapper;
TagEditorWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map