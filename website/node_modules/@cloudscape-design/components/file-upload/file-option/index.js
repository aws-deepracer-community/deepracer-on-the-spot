// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalBox from '../../box/internal';
import InternalSpaceBetween from '../../space-between/internal';
import styles from './styles.css.js';
import * as defaultFormatters from '../default-formatters';
import { FileOptionThumbnail } from './thumbnail';
export function FileOption({ file, metadata, i18nStrings }) {
    var _a, _b;
    const isImage = file.type.startsWith('image/');
    const formatFileSize = (_a = i18nStrings.formatFileSize) !== null && _a !== void 0 ? _a : defaultFormatters.formatFileSize;
    const formatFileLastModified = (_b = i18nStrings.formatFileLastModified) !== null && _b !== void 0 ? _b : defaultFormatters.formatFileLastModified;
    return (React.createElement(InternalBox, { className: styles['file-option'] },
        metadata.showFileThumbnail && isImage && React.createElement(FileOptionThumbnail, { file: file }),
        React.createElement("div", { className: styles['file-option-metadata'] },
            React.createElement(InternalSpaceBetween, { direction: "vertical", size: "xxxs" },
                React.createElement(InternalBox, { className: styles['file-option-name'] }, file.name),
                metadata.showFileSize && file.size ? (React.createElement(InternalBox, { fontSize: "body-s", color: "text-body-secondary", className: styles['file-option-size'] }, formatFileSize(file.size))) : null,
                metadata.showFileLastModified && file.lastModified ? (React.createElement(InternalBox, { fontSize: "body-s", color: "text-body-secondary", className: styles['file-option-last-modified'] }, formatFileLastModified(new Date(file.lastModified)))) : null))));
}
//# sourceMappingURL=index.js.map