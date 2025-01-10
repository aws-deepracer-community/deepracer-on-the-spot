import React from 'react';
import { CollectionPreferencesProps } from './interfaces';
export declare const copyPreferences: ({ pageSize, wrapLines, stripedRows, contentDensity, visibleContent, contentDisplay, stickyColumns, custom, }: CollectionPreferencesProps.Preferences) => CollectionPreferencesProps.Preferences;
export declare const mergePreferences: (newPref: CollectionPreferencesProps.Preferences, oldPref: CollectionPreferencesProps.Preferences) => CollectionPreferencesProps.Preferences;
interface ModalContentLayoutProps {
    left: React.ReactNode;
    right: React.ReactNode;
}
export declare const ModalContentLayout: ({ left, right }: ModalContentLayoutProps) => JSX.Element;
interface PageSizePreferenceProps extends CollectionPreferencesProps.PageSizePreference {
    onChange: (value: number) => void;
    value?: number;
}
export declare const PageSizePreference: ({ title, options, value, onChange }: PageSizePreferenceProps) => JSX.Element;
interface WrapLinesPreferenceProps extends CollectionPreferencesProps.WrapLinesPreference {
    onChange: (value: boolean) => void;
    value?: boolean;
}
export declare const WrapLinesPreference: ({ label, description, value, onChange }: WrapLinesPreferenceProps) => JSX.Element;
interface StripedRowsPreferenceProps extends CollectionPreferencesProps.StripedRowsPreference {
    onChange: (value: boolean) => void;
    value?: boolean;
}
export declare function StripedRowsPreference({ label, description, value, onChange }: StripedRowsPreferenceProps): JSX.Element;
interface ContentDensityPreferenceProps extends CollectionPreferencesProps.ContentDensityPreference {
    onChange: (value: 'comfortable' | 'compact') => void;
    value?: 'comfortable' | 'compact';
}
export declare const ContentDensityPreference: ({ label, description, value, onChange }: ContentDensityPreferenceProps) => JSX.Element;
interface StickyColumnsPreferenceProps extends CollectionPreferencesProps.StickyColumnsPreference {
    onChange: (value?: {
        first?: number;
        last?: number;
    }) => void;
    value?: {
        first?: number;
        last?: number;
    };
}
export declare const StickyColumnsPreference: ({ firstColumns, lastColumns, onChange, value, }: StickyColumnsPreferenceProps) => JSX.Element;
interface CustomPreferenceProps<T = any> extends Pick<CollectionPreferencesProps<T>, 'customPreference'> {
    onChange: (value: T) => void;
    value: T;
}
export declare const CustomPreference: ({ value, customPreference, onChange }: CustomPreferenceProps) => JSX.Element | null;
export {};
//# sourceMappingURL=utils.d.ts.map