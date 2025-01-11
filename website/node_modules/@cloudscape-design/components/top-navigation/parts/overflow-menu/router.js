// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useState } from 'react';
const defaultCtx = { state: { view: 'utilities', data: null }, setState: () => { } };
export const ViewContext = createContext(defaultCtx);
export const useNavigate = () => {
    const { setState } = useContext(ViewContext);
    const navigate = (view, data) => {
        setState({ view, data });
    };
    return navigate;
};
export const Route = ({ view, element }) => {
    const { state } = useContext(ViewContext);
    if (view === state.view) {
        if (typeof element === 'function') {
            return element(state.data);
        }
        return React.createElement(React.Fragment, null, element);
    }
    return null;
};
const Router = ({ children }) => {
    const [state, setState] = useState({ view: 'utilities', data: null });
    return React.createElement(ViewContext.Provider, { value: { state, setState } }, children);
};
export default Router;
//# sourceMappingURL=router.js.map