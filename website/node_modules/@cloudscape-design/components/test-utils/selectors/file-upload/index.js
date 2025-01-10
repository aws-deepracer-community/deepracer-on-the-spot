"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../file-upload/styles.selectors.js");
const styles_selectors_js_2 = require("../../../file-upload/file-input/styles.selectors.js");
const styles_selectors_js_3 = require("../../../file-upload/file-option/styles.selectors.js");
const styles_selectors_js_4 = require("../../../token-group/styles.selectors.js");
const styles_selectors_js_5 = require("../../../internal/components/token-list/styles.selectors.js");
const styles_selectors_js_6 = require("../../../form-field/styles.selectors.js");
const button_1 = require("../button");
class FileUploadWrapper extends selectors_1.ComponentWrapper {
    findUploadButton() {
        return this.findComponent(`.${styles_selectors_js_2.default['upload-button']}`, button_1.default);
    }
    findNativeInput() {
        return this.findByClassName(styles_selectors_js_2.default['upload-input']);
    }
    findFileTokens() {
        return this.findAllByClassName(styles_selectors_js_4.default.token).map(tokenElement => new FileTokenWrapper(tokenElement.getElement()));
    }
    /**
     * Returns a file token from for a given index.
     *
     * @param tokenIndex 1-based index of the file token to return.
     */
    findFileToken(fileTokenIndex) {
        return this.findComponent(`.${styles_selectors_js_4.default.token}[data-index="${fileTokenIndex - 1}"]`, FileTokenWrapper);
    }
    /**
     * Returns the token toggle button.
     */
    findTokenToggle() {
        return this.findByClassName(styles_selectors_js_5.default.toggle);
    }
    findConstraint() {
        return this.find(`.${styles_selectors_js_1.default.hints} .${styles_selectors_js_6.default.constraint}`);
    }
    findError() {
        return this.find(`.${styles_selectors_js_1.default.hints} .${styles_selectors_js_6.default.error} .${styles_selectors_js_6.default.error__message}`);
    }
}
exports.default = FileUploadWrapper;
FileUploadWrapper.rootSelector = styles_selectors_js_1.default.root;
class FileTokenWrapper extends selectors_1.ComponentWrapper {
    findFileName() {
        return this.findByClassName(styles_selectors_js_3.default['file-option-name']);
    }
    findFileSize() {
        return this.findByClassName(styles_selectors_js_3.default['file-option-size']);
    }
    findFileLastModified() {
        return this.findByClassName(styles_selectors_js_3.default['file-option-last-modified']);
    }
    findFileThumbnail() {
        return this.findByClassName(styles_selectors_js_3.default['file-option-thumbnail-image']);
    }
    findFileError() {
        return this.find(`.${styles_selectors_js_6.default.error} .${styles_selectors_js_6.default.error__message}`);
    }
    findRemoveButton() {
        return this.findByClassName(styles_selectors_js_4.default['dismiss-button']);
    }
}
//# sourceMappingURL=index.js.map