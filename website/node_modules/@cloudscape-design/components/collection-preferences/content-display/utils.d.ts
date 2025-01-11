import { CollectionPreferencesProps } from '../interfaces';
export interface OptionWithVisibility extends CollectionPreferencesProps.ContentDisplayOption {
    visible?: boolean;
}
export declare function getSortedOptions({ options, contentDisplay, }: {
    options: ReadonlyArray<CollectionPreferencesProps.ContentDisplayOption>;
    contentDisplay: ReadonlyArray<CollectionPreferencesProps.ContentDisplayItem>;
}): ReadonlyArray<OptionWithVisibility>;
//# sourceMappingURL=utils.d.ts.map