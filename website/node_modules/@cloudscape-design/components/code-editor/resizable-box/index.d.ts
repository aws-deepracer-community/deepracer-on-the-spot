import React from 'react';
export interface ResizeBoxProps {
    children: React.ReactNode;
    height: number;
    minHeight: number;
    onResize: (newHeight: number) => void;
}
export declare function ResizableBox({ children, height, minHeight, onResize }: ResizeBoxProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map