import React, { useCallback, useState } from "react";

export interface UseControlledStateProps<T> {
    /**
     * The value to used in controlled mode
     */
    value?: T;
    /**
     * The initial value to be used, in uncontrolled mode
     */
    defaultValue?: T | (() => T);
    /**
     * The callback fired when the value changes
     */
    onChange?: (value: T) => void;
}

/**
 * React hook for using controlled component state.
 * @param props
 */
export function useControlledtate<T>(props: UseControlledStateProps<T>) {
    const { value: valueProp, defaultValue, onChange } = props;

    const [valueState, setValue] = useState(defaultValue as T);

    const isControlled = valueProp !== undefined;
    const value = isControlled ? (valueProp as T) : valueState;

    const updateValue = useCallback(
        (next: React.SetStateAction<T>) => {
            let nextValue: T;
            if (typeof next === "function") {
                nextValue = (next as (prevState: T) => T)(value);
            } else {
                nextValue = next;
            }

            if (!isControlled) {
                setValue(nextValue);
            }

            onChange?.(nextValue);
        },
        [isControlled, onChange, value]
    );

    return [value, updateValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
