import React from 'react';
import { AutosuggestProps } from '../autosuggest/interfaces';
import { CancelableEventHandler } from '../internal/events';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { AutosuggestInputRef } from '../internal/components/autosuggest-input';
export interface PropertyFilterAutosuggestProps extends Omit<AutosuggestProps, 'filteringResultsText'>, InternalBaseComponentProps {
    customForm?: React.ReactNode;
    filterText?: string;
    onOptionClick?: CancelableEventHandler<AutosuggestProps.Option>;
    hideEnteredTextOption?: boolean;
    searchResultsId?: string;
}
declare const PropertyFilterAutosuggest: React.ForwardRefExoticComponent<PropertyFilterAutosuggestProps & React.RefAttributes<AutosuggestInputRef>>;
export default PropertyFilterAutosuggest;
//# sourceMappingURL=property-filter-autosuggest.d.ts.map