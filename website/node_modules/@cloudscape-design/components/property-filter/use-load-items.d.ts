import { NonCancelableEventHandler } from '../internal/events/index';
import { ComparisonOperator, FilteringProperty, LoadItemsDetail } from './interfaces';
/**
 * This hook generates `onBlur`, `onFocus` and `onLoadItems` handlers that make sure an `onLoadItems` event
 * fires exactly once every time control they are used on gets focused.
 * It is necessary to do this because Autosuggest and Select dedupe their `onLoadItems` events stopping
 * the same event from firing twice in a row. This means, refocusing the control sometimes results in
 * `onLoadItems` firing, but sometimes not.
 */
export declare const useLoadItems: (onLoadItems?: NonCancelableEventHandler<LoadItemsDetail>, focusFilteringText?: string, currentFilteringProperty?: FilteringProperty, currentFilteringText?: string, currentFilteringOperator?: ComparisonOperator) => {
    onBlur: () => void;
    onFocus: () => void;
    onLoadItems: NonCancelableEventHandler<import("../internal/components/dropdown/interfaces").OptionsLoadItemsDetail>;
};
//# sourceMappingURL=use-load-items.d.ts.map