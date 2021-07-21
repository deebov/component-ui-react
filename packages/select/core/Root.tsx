import React, { HTMLAttributes, useCallback, useRef } from "react";
import { SelectContextProvider } from "./SelectContext";
import { UseSelectStateReturn } from "../hooks/useSelectState";

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    state: UseSelectStateReturn;
    isDisabled?: boolean
}

export const Root = (props: RootProps) => {
    const { state, children, isDisabled, ...otherProps } = props;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);

    const closeWithFocus = useCallback(() => {
        state.close();
        setTimeout(() => {
            triggerRef.current?.focus();
        }, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.close]);

    return (
        <SelectContextProvider
            value={{
                isDisabled,
                state,
                closeWithFocus,
                trigger: {
                    ref: triggerRef,
                },
                listbox: {
                    ref: listboxRef,
                },
            }}>
            <div {...otherProps} className={"atlas-select--root " + (otherProps.className || "")}>
                {props.children}
            </div>
        </SelectContextProvider>
    );
};
