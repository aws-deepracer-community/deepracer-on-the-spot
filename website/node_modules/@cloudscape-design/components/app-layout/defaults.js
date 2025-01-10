const defaultContentTypeState = {
    navigationOpen: true,
    minContentWidth: 280,
    maxContentWidth: undefined,
};
const defaults = {
    default: Object.assign({}, defaultContentTypeState),
    dashboard: Object.assign({}, defaultContentTypeState),
    cards: {
        navigationOpen: true,
        minContentWidth: 280,
        maxContentWidth: undefined,
    },
    form: {
        navigationOpen: false,
        minContentWidth: 280,
        maxContentWidth: 800,
    },
    table: {
        navigationOpen: true,
        minContentWidth: 280,
        maxContentWidth: undefined,
    },
    wizard: {
        navigationOpen: false,
        minContentWidth: 280,
        maxContentWidth: 1080,
    },
};
export function applyDefaults(contentType, stateFromProps, isRefresh) {
    var _a, _b, _c;
    const contentTypeDefaults = isRefresh
        ? Object.assign(Object.assign({}, defaults[contentType]), { maxContentWidth: undefined }) : defaults[contentType];
    return {
        maxContentWidth: (_a = stateFromProps.maxContentWidth) !== null && _a !== void 0 ? _a : contentTypeDefaults.maxContentWidth,
        minContentWidth: (_b = stateFromProps.minContentWidth) !== null && _b !== void 0 ? _b : contentTypeDefaults.minContentWidth,
        navigationOpen: (_c = stateFromProps.navigationOpen) !== null && _c !== void 0 ? _c : contentTypeDefaults.navigationOpen,
    };
}
//# sourceMappingURL=defaults.js.map