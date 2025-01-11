import React from 'react';
import { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
export interface I18nProviderProps {
    messages: ReadonlyArray<I18nProviderProps.Messages>;
    locale?: string;
    children: React.ReactNode;
}
export declare namespace I18nProviderProps {
    interface Messages {
        [namespace: string]: {
            [locale: string]: {
                [component: string]: {
                    [key: string]: string | MessageFormatElement[];
                };
            };
        };
    }
}
export declare function I18nProvider({ messages: messagesArray, locale: providedLocale, children }: I18nProviderProps): JSX.Element;
//# sourceMappingURL=provider.d.ts.map