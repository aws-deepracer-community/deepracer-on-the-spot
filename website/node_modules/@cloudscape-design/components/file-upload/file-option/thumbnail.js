// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useState } from 'react';
import styles from './styles.css.js';
export function FileOptionThumbnail({ file }) {
    const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        // The URL.createObjectURL is not available in jsdom.
        if (URL.createObjectURL) {
            const src = URL.createObjectURL(file);
            setImageSrc(src);
            return () => {
                URL.revokeObjectURL(src);
            };
        }
    }, [file]);
    return (React.createElement("div", { className: styles['file-option-thumbnail'], "aria-hidden": true },
        React.createElement("img", { className: styles['file-option-thumbnail-image'], alt: file.name, src: imageSrc })));
}
//# sourceMappingURL=thumbnail.js.map