import { ButtonHTMLAttributes } from 'react';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
export interface DragHandleProps {
    attributes: ButtonHTMLAttributes<HTMLDivElement>;
    hideFocus?: boolean;
    listeners?: SyntheticListenerMap;
}
export default function DragHandle({ attributes, hideFocus, listeners }: DragHandleProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map