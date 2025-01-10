import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export declare class ChartPopoverSeriesItemWrapper extends ElementWrapper {
    findKey(): ElementWrapper;
    findValue(): ElementWrapper;
}
export declare class ChartPopoverSeriesWrapper extends ChartPopoverSeriesItemWrapper {
    findSubItems(): Array<ChartPopoverSeriesItemWrapper>;
}
export default class ChartPopoverWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper | null;
    findDismissButton(): ButtonWrapper | null;
    findSeries(): ChartPopoverSeriesWrapper[] | null;
}
