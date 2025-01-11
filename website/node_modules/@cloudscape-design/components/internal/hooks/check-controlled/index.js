// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isDevelopment } from '../../is-development';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
export default function checkControlled(componentName, propertyName, propertyValue, handlerName, handlerValue) {
    if (propertyValue !== undefined && handlerValue === undefined && isDevelopment) {
        warnOnce(componentName, `You provided \`${propertyName}\` prop without an \`${handlerName}\` handler. This will render a read-only component. If the component should be mutable, set an \`${handlerName}\` handler.`);
    }
}
//# sourceMappingURL=index.js.map