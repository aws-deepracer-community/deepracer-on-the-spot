import React from 'react';
export interface TestI18nProviderProps {
    messages: Record<string, Record<string, string>>;
    locale?: string;
    children: React.ReactNode;
}
export default function TestI18nProvider({ messages, locale, children }: TestI18nProviderProps): JSX.Element;
//# sourceMappingURL=testing.d.ts.map