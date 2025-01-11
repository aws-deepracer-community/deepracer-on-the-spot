import { computePlotPoints, computeDomainX, computeDomainY } from './utils';
import { createXTicks, createYTicks, getXTickCount, getYTickCount, } from '../../internal/components/cartesian-chart/ticks';
import { ChartScale, NumericChartScale } from '../../internal/components/cartesian-chart/scales';
export default function computeChartProps({ series, xDomain: externalXDomain, yDomain: externalYDomain, xScaleType, yScaleType, height, width, }) {
    const xDomain = externalXDomain || computeDomainX(series);
    const xTickCount = getXTickCount(width);
    const xScale = new ChartScale(xScaleType, xDomain, [0, width]);
    const xTicks = xScale.domain.length > 0 ? createXTicks(xScale, xTickCount) : [];
    const yDomain = externalYDomain || computeDomainY(series, yScaleType);
    const yTickCount = getYTickCount(height);
    const yScale = new NumericChartScale(yScaleType, yDomain, [height, 0], externalYDomain ? null : yTickCount);
    const yTicks = createYTicks(yScale, yTickCount);
    const plot = computePlotPoints(series, xScale, yScale);
    return { xDomain, yDomain, xScale, yScale, xTicks, yTicks, plot };
}
//# sourceMappingURL=compute-chart-props.js.map