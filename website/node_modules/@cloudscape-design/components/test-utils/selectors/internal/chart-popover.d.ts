import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
export declare class ChartPopoverSeriesItemWrapper extends ElementWrapper {
    findKey(): ElementWrapper;
    findValue(): ElementWrapper;
}
export declare class ChartPopoverSeriesWrapper extends ChartPopoverSeriesItemWrapper {
    findSubItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ChartPopoverSeriesItemWrapper>;
}
export default class ChartPopoverWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findDismissButton(): ButtonWrapper;
    findSeries(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ChartPopoverSeriesWrapper>;
}
