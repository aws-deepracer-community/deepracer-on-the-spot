/// <reference types="react" />
import { ContentLayoutProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
type InternalContentLayoutProps = ContentLayoutProps & InternalBaseComponentProps;
export default function InternalContentLayout({ children, disableOverlap, header, __internalRootRef, ...rest }: InternalContentLayoutProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map