import React from 'react';
export interface PortalProps {
    container?: null | Element;
    getContainer?: () => Promise<HTMLElement>;
    removeContainer?: (container: HTMLElement) => void;
    children: React.ReactNode;
}
/**
 * A safe react portal component that renders to a provided node.
 * If a node isn't provided, it creates one under document.body.
 */
export default function Portal({ container, getContainer, removeContainer, children }: PortalProps): React.ReactPortal | null;
//# sourceMappingURL=index.d.ts.map