/// <reference types="react" />
import { DateRangePickerProps } from './interfaces';
interface ModeSwitcherProps extends Pick<DateRangePickerProps, 'i18nStrings'> {
    mode: 'absolute' | 'relative';
    onChange: (mode: 'absolute' | 'relative') => void;
}
export default function ModeSwitcher({ i18nStrings, mode, onChange }: ModeSwitcherProps): JSX.Element;
export {};
//# sourceMappingURL=mode-switcher.d.ts.map