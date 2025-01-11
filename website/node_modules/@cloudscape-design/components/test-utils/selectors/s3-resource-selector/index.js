"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const __1 = require("../");
const input_1 = require("../input");
const button_1 = require("../button");
const modal_1 = require("../modal");
const table_1 = require("../table");
const styles_selectors_js_1 = require("../../../s3-resource-selector/styles.selectors.js");
const styles_selectors_js_2 = require("../../../s3-resource-selector/s3-in-context/styles.selectors.js");
const styles_selectors_js_3 = require("../../../s3-resource-selector/s3-modal/styles.selectors.js");
class S3ModalWrapper extends modal_1.default {
    findSubmitButton() {
        return this.findComponent(`.${styles_selectors_js_3.default['submit-button']}`, button_1.default);
    }
}
class S3InContextWrapper extends selectors_1.ComponentWrapper {
    findUriInput() {
        return this.findComponent(`.${styles_selectors_js_2.default['layout-uri']}`, input_1.default);
    }
    findVersionsSelect() {
        const select = this.findByClassName(styles_selectors_js_2.default['layout-version']);
        return select && select.findSelect();
    }
    findViewButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['view-button']}`, button_1.default);
    }
    findBrowseButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['browse-button']}`, button_1.default);
    }
}
class S3ResourceSelectorWrapper extends selectors_1.ComponentWrapper {
    findAlertSlot() {
        return this.findByClassName(styles_selectors_js_1.default.alert);
    }
    findInContext() {
        return this.findComponent(`.${styles_selectors_js_2.default.root}`, S3InContextWrapper);
    }
    findModal() {
        const modal = (0, __1.default)().findModal();
        return modal && new S3ModalWrapper(modal.getElement());
    }
    findTable() {
        const modal = this.findModal();
        return modal && modal.findComponent(`.${table_1.default.rootSelector}`, table_1.default);
    }
}
exports.default = S3ResourceSelectorWrapper;
S3ResourceSelectorWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map