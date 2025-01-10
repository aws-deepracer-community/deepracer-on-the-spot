"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const radio_button_1 = require("../radio-group/radio-button");
const styles_selectors_js_1 = require("../../../tiles/styles.selectors.js");
class TileWrapper extends selectors_1.ElementWrapper {
    findRadioButton() {
        return new radio_button_1.default(this.getElement());
    }
    findLabel() {
        return this.findRadioButton().findLabel();
    }
    findDescription() {
        return this.findRadioButton().findDescription();
    }
    findImage() {
        return this.findByClassName(styles_selectors_js_1.default.image);
    }
    findNativeInput() {
        return this.findRadioButton().findNativeInput();
    }
}
exports.default = TileWrapper;
TileWrapper.rootSelector = styles_selectors_js_1.default['tile-container'];
//# sourceMappingURL=tile.js.map