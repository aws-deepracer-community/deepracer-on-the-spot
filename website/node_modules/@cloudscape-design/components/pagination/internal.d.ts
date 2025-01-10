/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { PaginationProps } from './interfaces';
type InternalPaginationProps = PaginationProps & InternalBaseComponentProps;
export default function InternalPagination({ openEnd, currentPageIndex, ariaLabels, pagesCount, disabled, onChange, onNextPageClick, onPreviousPageClick, __internalRootRef, ...rest }: InternalPaginationProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map