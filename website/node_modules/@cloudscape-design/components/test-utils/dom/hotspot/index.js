"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const styles_selectors_js_1 = require("../../../hotspot/styles.selectors.js");
const styles_selectors_js_2 = require("../../../annotation-context/annotation/styles.selectors.js");
const index_js_1 = require("../index.js");
class HotspotWrapper extends dom_1.ComponentWrapper {
    findTrigger() {
        return this.findByClassName(styles_selectors_js_2.default.hotspot);
    }
    findAnnotation() {
        return this.findComponent(`.${styles_selectors_js_2.default.annotation}`, index_js_1.AnnotationWrapper);
    }
}
exports.default = HotspotWrapper;
HotspotWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map