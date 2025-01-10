/// <reference types="react" />
import { CollectionPreferencesProps } from '../interfaces';
interface ContentDisplayPreferenceProps extends CollectionPreferencesProps.ContentDisplayPreference {
    onChange: (value: ReadonlyArray<CollectionPreferencesProps.ContentDisplayItem>) => void;
    value?: ReadonlyArray<CollectionPreferencesProps.ContentDisplayItem>;
}
export default function ContentDisplayPreference({ title, description, options, value, onChange, liveAnnouncementDndStarted, liveAnnouncementDndItemReordered, liveAnnouncementDndItemCommitted, liveAnnouncementDndDiscarded, dragHandleAriaDescription, dragHandleAriaLabel, }: ContentDisplayPreferenceProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map