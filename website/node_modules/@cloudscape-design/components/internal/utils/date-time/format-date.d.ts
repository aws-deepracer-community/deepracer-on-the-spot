import { CalendarProps } from '../../../calendar/interfaces';
/**
 * Transforms Date's object date part to a string.
 *
 * We cannot use Date.toISOString because it produces GMT time where the date can be different than local.
 */
export declare function formatDate(value: Date, granularity?: CalendarProps.Granularity): string;
//# sourceMappingURL=format-date.d.ts.map