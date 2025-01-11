import React from 'react';
import { ContainerProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { useFunnelSubStep } from '../internal/analytics/hooks/use-funnel';
export interface InternalContainerProps extends Omit<ContainerProps, 'variant'>, InternalBaseComponentProps {
    __stickyHeader?: boolean;
    __stickyOffset?: number;
    __mobileStickyOffset?: number;
    __disableFooterDivider?: boolean;
    __disableFooterPaddings?: boolean;
    __hiddenContent?: boolean;
    __headerRef?: React.RefObject<HTMLDivElement>;
    __darkHeader?: boolean;
    __disableStickyMobile?: boolean;
    /**
     * Additional internal variant:
     * * `embedded` - Use this variant within a parent container (such as a modal,
     *                expandable section, container or split panel).
     * * `full-page` – Only for internal use in table, cards and other components
     */
    variant?: ContainerProps['variant'] | 'embedded' | 'full-page' | 'cards';
    __funnelSubStepProps?: ReturnType<typeof useFunnelSubStep>['funnelSubStepProps'];
    __subStepRef?: ReturnType<typeof useFunnelSubStep>['subStepRef'];
}
export declare function InternalContainerAsSubstep(props: InternalContainerProps): JSX.Element;
export default function InternalContainer({ header, footer, children, variant, disableHeaderPaddings, disableContentPaddings, fitHeight, media, __stickyOffset, __mobileStickyOffset, __stickyHeader, __internalRootRef, __disableFooterDivider, __disableFooterPaddings, __hiddenContent, __headerRef, __darkHeader, __disableStickyMobile, __funnelSubStepProps, __subStepRef, ...restProps }: InternalContainerProps): JSX.Element;
//# sourceMappingURL=internal.d.ts.map