import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonDropdownWrapper from '../button-dropdown';
export default class BreadcrumbGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns all breadcrumb items. Note that this includes the 'current' page item for backwards compatibility,
     * even though it is not technically a link.
     *
     * To find a specific item use the `findBreadcrumbLink(n)` function as chaining `findBreadcrumbLinks().get(n)` can return unexpected results.
     * @see findBreadcrumbLink
     */
    findBreadcrumbLinks(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    /**
     * Returns an item for a given index. Note that this may return the 'current' page item for backwards compatibility,
     * even though it is not technically a link.
     *
     * @param index 1-based item index
     */
    findBreadcrumbLink(index: number): ElementWrapper;
    findDropdown(): ButtonDropdownWrapper;
}
