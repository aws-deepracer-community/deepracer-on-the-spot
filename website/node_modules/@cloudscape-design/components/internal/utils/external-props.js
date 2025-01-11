// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Method to filter out internal properties prefixed by "__"
 */
export const getExternalProps = (props) => {
    const externalPropNames = Object.keys(props).filter((propName) => propName.indexOf('__') !== 0);
    return externalPropNames.reduce((acc, propName) => {
        acc[propName] = props[propName];
        return acc;
    }, {});
};
//# sourceMappingURL=external-props.js.map