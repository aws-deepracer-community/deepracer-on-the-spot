// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef, memo } from 'react';
import InternalBox from '../../../box/internal';
import { KeyCode } from '../../keycode';
import SeriesMarker from '../chart-series-marker';
import styles from './styles.css.js';
import { useInternalI18n } from '../../../i18n/context';
export default memo(ChartLegend);
function ChartLegend({ series, onHighlightChange, highlightedSeries, legendTitle, ariaLabel, plotContainerRef, }) {
    const i18n = useInternalI18n('[charts]');
    const containerRef = useRef(null);
    const segmentsRef = useRef([]);
    const highlightedSeriesIndex = findSeriesIndex(series, highlightedSeries);
    const highlightLeft = () => {
        var _a;
        const currentIndex = highlightedSeriesIndex !== null && highlightedSeriesIndex !== void 0 ? highlightedSeriesIndex : 0;
        const nextIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : series.length - 1;
        (_a = segmentsRef.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const highlightRight = () => {
        var _a;
        const currentIndex = highlightedSeriesIndex !== null && highlightedSeriesIndex !== void 0 ? highlightedSeriesIndex : 0;
        const nextIndex = currentIndex + 1 < series.length ? currentIndex + 1 : 0;
        (_a = segmentsRef.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleKeyPress = (event) => {
        if (event.keyCode === KeyCode.right || event.keyCode === KeyCode.left) {
            // Preventing default fixes an issue in Safari+VO when VO additionally interprets arrow keys as its commands.
            event.preventDefault();
            switch (event.keyCode) {
                case KeyCode.left:
                    return highlightLeft();
                case KeyCode.right:
                    return highlightRight();
                default:
                    return;
            }
        }
    };
    const handleSelection = (index) => {
        if (series[index].datum !== highlightedSeries) {
            onHighlightChange(series[index].datum);
        }
    };
    const handleBlur = (event) => {
        var _a;
        // We need to check if the next element to be focused inside the plot container or not
        // so we don't clear the selected legend in case we are still focusing elements ( legend elements )
        // inside the plot container
        if (event.relatedTarget === null ||
            (containerRef.current &&
                !containerRef.current.contains(event.relatedTarget) &&
                !((_a = plotContainerRef === null || plotContainerRef === void 0 ? void 0 : plotContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget)))) {
            onHighlightChange(null);
        }
    };
    const handleMouseOver = (s) => {
        if (s !== highlightedSeries) {
            onHighlightChange(s);
        }
    };
    const handleMouseLeave = () => {
        onHighlightChange(null);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: containerRef, role: "toolbar", "aria-label": legendTitle || i18n('i18nStrings.legendAriaLabel', ariaLabel), className: styles.root, onKeyDown: handleKeyPress, onBlur: handleBlur },
            legendTitle && (React.createElement(InternalBox, { fontWeight: "bold", className: styles.title }, legendTitle)),
            React.createElement("div", { className: styles.list }, series.map((s, index) => {
                const someHighlighted = highlightedSeries !== null;
                const isHighlighted = highlightedSeries === s.datum;
                const isDimmed = someHighlighted && !isHighlighted;
                return (React.createElement("div", { role: "button", key: index, "aria-pressed": isHighlighted, className: clsx(styles.marker, {
                        [styles['marker--dimmed']]: isDimmed,
                        [styles['marker--highlighted']]: isHighlighted,
                    }), ref: elem => {
                        if (elem) {
                            segmentsRef.current[index] = elem;
                        }
                        else {
                            delete segmentsRef.current[index];
                        }
                    }, tabIndex: index === highlightedSeriesIndex || (highlightedSeriesIndex === undefined && index === 0) ? 0 : -1, onFocus: () => handleSelection(index), onClick: () => handleSelection(index), onMouseOver: () => handleMouseOver(s.datum), onMouseLeave: handleMouseLeave },
                    React.createElement(SeriesMarker, { color: s.color, type: s.type }),
                    " ",
                    s.label));
            })))));
}
function findSeriesIndex(series, targetSeries) {
    for (let index = 0; index < series.length; index++) {
        if (series[index].datum === targetSeries) {
            return index;
        }
    }
    return undefined;
}
//# sourceMappingURL=index.js.map