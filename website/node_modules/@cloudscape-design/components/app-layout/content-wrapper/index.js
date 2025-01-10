// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import styles from './styles.css.js';
const ContentWrapper = React.forwardRef(({ className, contentType, children, toolsPadding, disablePaddings, navigationPadding, isMobile, contentWidthStyles, }, ref) => {
    if (disablePaddings) {
        return (React.createElement("div", { className: className, ref: ref }, children));
    }
    return (React.createElement("div", { ref: ref, className: clsx(styles['content-wrapper'], !navigationPadding && styles['content-wrapper-no-navigation-padding'], !toolsPadding && styles['content-wrapper-no-tools-padding'], isMobile && styles['content-wrapper-mobile']) },
        React.createElement("div", { style: contentWidthStyles, className: clsx(className, styles[`content-type-${contentType}`]) }, children)));
});
export default ContentWrapper;
//# sourceMappingURL=index.js.map