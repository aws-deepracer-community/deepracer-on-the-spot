// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useContext } from 'react';
export const InternalI18nContext = React.createContext({
    locale: null,
    format: (_namespace, _component, _key, provided) => provided,
});
export function useLocale() {
    return useContext(InternalI18nContext).locale;
}
export function useInternalI18n(componentName) {
    const { format } = useContext(InternalI18nContext);
    return (key, provided, customHandler) => {
        return format('@cloudscape-design/components', componentName, key, provided, customHandler);
    };
}
//# sourceMappingURL=context.js.map