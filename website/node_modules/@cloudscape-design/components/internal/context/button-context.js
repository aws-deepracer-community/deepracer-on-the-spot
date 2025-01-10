// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, createContext } from 'react';
export const ButtonContext = createContext({
    onClick: () => { },
});
export function useButtonContext() {
    return useContext(ButtonContext);
}
//# sourceMappingURL=button-context.js.map