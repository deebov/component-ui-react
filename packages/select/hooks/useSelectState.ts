import { Key, useCallback, useState } from "react";
import { useControlledtate } from "../../hooks";

export type Value = string | number;

export type UseSelectStateOptions = {
    /**
     * The selected value. If provided then the select state will be controlled.
     */
    value?: Value;
    /**
     * Default selected value.
     */
    defaultValue?: Value;
    /**
     * Default isOpen value.
     */
    defaultOpen?: boolean;
    /**
     * A callback that fires whenever the select state changes
     */
    onChange?: (value: Value) => void;
};

export type UseSelectStateReturn = {
    /**
     * Current selected value.
     */
    value: Value | null;
    /**
     * A function to set the current selected value.
     */
    setValue: (value: Value) => void;
    /**
     * The visibility state of the popover.
     */
    isOpen: boolean;
    /**
     * A function that sets `isOpen` to `true`.
     */
    open: () => void;
    /**
     * A function that sets `isOpen` to `false`.
     */
    close: () => void;
    /**
     * A function that toggles the value of `isOpen`.
     */
    toggle: () => void;
    /**
     * A helper function that returs true if the provided value is currently selected.
     */
    isSelected: (key: Key) => boolean;
};

export const useSelectState = (options: UseSelectStateOptions = {}): UseSelectStateReturn => {
    const [isOpen, setIsOpen] = useState(options.defaultOpen ?? false);
    const [selectedValue, setSelectedValue] = useControlledtate(options);
    const open = useCallback(() => setIsOpen(true), [setIsOpen]);
    const close = useCallback(() => setIsOpen(false), [setIsOpen]);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

    return {
        isOpen,
        open,
        close,
        toggle,
        value: selectedValue,
        setValue: setSelectedValue,
        isSelected: (value) => value === selectedValue,
    };
};
