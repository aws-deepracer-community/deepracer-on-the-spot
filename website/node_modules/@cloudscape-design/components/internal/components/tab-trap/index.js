// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
/**
 * This component handles focus-forwarding when using keyboard tab navigation.
 * When the user focuses this component, the `focusNextCallback` function is called
 * which can forward the focus to another element.
 */
export default function TabTrap({ focusNextCallback, disabled = false }) {
    return React.createElement("div", { tabIndex: disabled ? -1 : 0, onFocus: focusNextCallback });
}
//# sourceMappingURL=index.js.map