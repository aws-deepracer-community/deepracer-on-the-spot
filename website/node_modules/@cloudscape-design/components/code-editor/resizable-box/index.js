// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.css.js';
import { useStableCallback } from '@cloudscape-design/component-toolkit/internal';
export function ResizableBox({ children, height, minHeight, onResize }) {
    const [dragOffset, setDragOffset] = useState(null);
    const onResizeStable = useStableCallback(onResize);
    const containerRef = useRef(null);
    const onMouseDown = event => {
        if (event.button !== 0 || !containerRef.current) {
            return;
        }
        const containerBottom = containerRef.current.getBoundingClientRect().bottom;
        setDragOffset(containerBottom - event.clientY);
    };
    useEffect(() => {
        if (dragOffset === null || !containerRef.current) {
            return;
        }
        const container = containerRef.current;
        const onMouseMove = (event) => {
            const { top } = container.getBoundingClientRect();
            const cursor = event.clientY;
            onResizeStable(Math.max(cursor + dragOffset - top, minHeight));
        };
        const onMouseUp = () => {
            setDragOffset(null);
        };
        document.body.classList.add(styles['resize-active']);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.classList.remove(styles['resize-active']);
        };
    }, [dragOffset, minHeight, onResizeStable]);
    return (React.createElement("div", { ref: containerRef, className: styles['resizable-box'], style: { height } },
        children,
        React.createElement("span", { className: styles['resizable-box-handle'], onMouseDown: onMouseDown })));
}
//# sourceMappingURL=index.js.map