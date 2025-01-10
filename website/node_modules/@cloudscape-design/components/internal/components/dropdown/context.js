// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useContext } from 'react';
const DropdownContext = React.createContext({
    position: 'bottom-right',
});
export function DropdownContextProvider({ children, position = 'bottom-right' }) {
    return React.createElement(DropdownContext.Provider, { value: { position } }, children);
}
export function useDropdownContext() {
    return useContext(DropdownContext);
}
//# sourceMappingURL=context.js.map