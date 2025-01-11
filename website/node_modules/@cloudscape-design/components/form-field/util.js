function makeSlotId(prop, formFieldId, propName) {
    if (!prop) {
        return undefined;
    }
    return `${formFieldId}-${propName}`;
}
export function getSlotIds(formFieldId, label, description, constraintText, errorText) {
    const ids = {
        label: makeSlotId(label, formFieldId, 'label'),
        description: makeSlotId(description, formFieldId, 'description'),
        constraint: makeSlotId(constraintText, formFieldId, 'constraint'),
        error: makeSlotId(errorText, formFieldId, 'error'),
    };
    return ids;
}
export function getAriaDescribedBy({ error, description, constraint }) {
    const describedByAttributes = [error, description, constraint].filter(e => !!e);
    const describedBy = describedByAttributes.length ? describedByAttributes.join(' ') : undefined;
    return describedBy;
}
export function getGridDefinition(stretch, secondaryControlPresent, isRefresh) {
    let columns;
    if (stretch) {
        columns = [{ colspan: 12 }, { colspan: 12 }];
    }
    else if (isRefresh) {
        columns = [{ colspan: { default: 12, xs: 8 } }, { colspan: { default: 12, xs: 4 } }];
    }
    else {
        columns = [{ colspan: { default: 12, xs: 9 } }, { colspan: { default: 12, xs: 3 } }];
    }
    if (!secondaryControlPresent) {
        return [columns[0]];
    }
    return columns;
}
//# sourceMappingURL=util.js.map