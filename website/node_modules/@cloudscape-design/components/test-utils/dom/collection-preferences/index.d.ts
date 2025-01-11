import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
import CheckboxWrapper from '../checkbox';
import ModalWrapper from '../modal';
import VisibleContentPreferenceWrapper from './visible-content-preference';
import PageSizePreferenceWrapper from './page-size-preference';
import StickyColumnsPreferenceWrapper from './sticky-columns-preference';
import ContentDisplayPreferenceWrapper from './content-display-preference';
declare class PreferencesModalWrapper extends ModalWrapper {
    static rootSelector: string;
    findCancelButton(): ButtonWrapper | null;
    findConfirmButton(): ButtonWrapper | null;
    findWrapLinesPreference(): CheckboxWrapper | null;
    findStripedRowsPreference(): CheckboxWrapper | null;
    findContentDensityPreference(): CheckboxWrapper | null;
    findPageSizePreference(): PageSizePreferenceWrapper | null;
    findVisibleContentPreference(): VisibleContentPreferenceWrapper | null;
    findStickyColumnsPreference(firstOrLast?: 'first' | 'last'): StickyColumnsPreferenceWrapper | null;
    findContentDisplayPreference(): ContentDisplayPreferenceWrapper | null;
    findCustomPreference(): ElementWrapper | null;
}
export default class CollectionPreferencesWrapper extends ComponentWrapper {
    static rootSelector: string;
    findModal(): PreferencesModalWrapper | null;
    findTriggerButton(): ButtonWrapper;
}
export {};
