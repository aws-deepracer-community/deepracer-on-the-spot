import AsyncStore from '../async-store';
const initialState = Object.freeze({
    highlightedX: null,
    highlightedPoint: null,
    highlightedSeries: null,
    legendSeries: null,
    isPopoverPinned: false,
});
export default class InteractionsStore extends AsyncStore {
    constructor(series, plot) {
        super(initialState);
        this.series = series;
        this.plot = plot;
    }
    highlightPoint(point) {
        this.set(state => (Object.assign(Object.assign({}, state), { highlightedX: this.plot.xy[point.index.x], highlightedPoint: point, highlightedSeries: this.series[point.index.s], legendSeries: this.series[point.index.s] })));
    }
    highlightX(points) {
        this.set(state => (Object.assign(Object.assign({}, state), { highlightedX: points, highlightedPoint: null, highlightedSeries: null, legendSeries: null })));
    }
    highlightFirstPoint() {
        this.set(state => {
            const series = state.legendSeries || state.highlightedSeries;
            const firstSeriesPoint = series && this._getFirstSeriesPoint(series);
            const point = state.highlightedPoint || firstSeriesPoint || this.plot.sx[0][0];
            return Object.assign(Object.assign({}, state), { highlightedX: this.plot.xy[point.index.x], highlightedPoint: point, highlightedSeries: this.series[point.index.s], legendSeries: this.series[point.index.s] });
        });
    }
    highlightSeries(s) {
        this.set(state => (Object.assign(Object.assign({}, state), { highlightedSeries: s, legendSeries: s })));
    }
    clearHighlight() {
        this.set(state => (Object.assign(Object.assign({}, state), { highlightedX: null, highlightedPoint: null, highlightedSeries: null })));
    }
    clearHighlightedLegend() {
        this.set(state => (Object.assign(Object.assign({}, state), { legendSeries: null })));
    }
    clearState() {
        this.set(() => initialState);
    }
    pinPopover() {
        this.set(state => (Object.assign(Object.assign({}, state), { isPopoverPinned: true })));
    }
    unpinPopover() {
        this.set(state => (Object.assign(Object.assign({}, state), { isPopoverPinned: false })));
    }
    togglePopoverPin() {
        this.set(state => (Object.assign(Object.assign({}, state), { isPopoverPinned: !state.isPopoverPinned })));
    }
    _getFirstSeriesPoint(s) {
        const seriesIndex = this.series.indexOf(s);
        const [firstSeriesPoint] = this.plot.sx[seriesIndex] || [];
        return firstSeriesPoint || null;
    }
}
//# sourceMappingURL=interactions-store.js.map