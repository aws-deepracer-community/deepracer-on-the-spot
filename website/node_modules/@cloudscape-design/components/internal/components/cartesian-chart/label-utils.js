const SPACE_BETWEEN = 4;
export function formatTicks({ ticks, scale, getLabelSpace, tickFormatter, }) {
    return ticks.map(tick => {
        var _a;
        const position = (_a = scale.d3Scale(tick)) !== null && _a !== void 0 ? _a : NaN;
        const label = tickFormatter ? tickFormatter(tick) : tick.toString();
        const lines = (label + '').split('\n');
        return { position, lines, space: Math.max(...lines.map(getLabelSpace)) };
    });
}
export function getVisibleTicks(ticks, from, until, balanceTicks = false) {
    ticks = getTicksInRange(ticks, from, until);
    return balanceTicks ? getReducedTicks(ticks) : removeIntersections(ticks);
}
function getTicksInRange(ticks, from, until) {
    return ticks.filter(tick => from <= tick.position - tick.space / 2 && tick.position + tick.space / 2 <= until);
}
function getReducedTicks(ticks) {
    const reduceLabelRatio = findReduceLabelRatio(ticks);
    const reducedTicks = [];
    for (let index = 0; index < ticks.length; index += reduceLabelRatio) {
        reducedTicks.push(ticks[index]);
    }
    return reducedTicks;
}
// Returns a ratio such that all elements can be displayed with no intersections.
function findReduceLabelRatio(ticks, ratio = 1) {
    if (ratio >= ticks.length) {
        return ratio;
    }
    for (let i = ratio; i < ticks.length; i += ratio) {
        if (hasIntersection(ticks[i - ratio], ticks[i])) {
            return findReduceLabelRatio(ticks, ratio + 1);
        }
    }
    return ratio;
}
function removeIntersections(ticks) {
    const visibleTicks = [];
    let prevTick = null;
    for (const tick of ticks) {
        if (!prevTick || !hasIntersection(prevTick, tick)) {
            visibleTicks.push(tick);
            prevTick = tick;
        }
    }
    return visibleTicks;
}
function hasIntersection(a, b) {
    const [left, right] = a.position < b.position ? [a, b] : [b, a];
    const leftEdge = left.position + left.space / 2 + SPACE_BETWEEN;
    const rightEdge = right.position - right.space / 2;
    return leftEdge > rightEdge;
}
// Ignoring as unsupported in JSDom.
/* istanbul ignore next */
export function getSVGTextSize(element) {
    if (element && element.getBBox) {
        return element.getBBox();
    }
    return undefined;
}
//# sourceMappingURL=label-utils.js.map