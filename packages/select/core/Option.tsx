import { MouseEventHandler } from "react";
import { HTMLAttributes, Key, KeyboardEventHandler } from "react";
import { useSelectContext } from "./SelectContext";

export interface OptionProps extends HTMLAttributes<HTMLElement> {
    value: Key;
    textValue: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
}

export const Option = (props: OptionProps) => {
    const { state, closeWithFocus } = useSelectContext();
    const { value, textValue, children, isDisabled, ...otherProps } = props;
    const isSelected = state.isSelected(props.value);

    const handleOptionClick: MouseEventHandler<HTMLElement> = (e) => {
        if (isDisabled) {
            return;
        }
        state.setValue(value);
        closeWithFocus();
        otherProps.onClick?.(e);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
        if (isDisabled) {
            return;
        }
        if (e.key === "Enter" || e.key === " ") {
            state.setValue(value);
            closeWithFocus();
        }
        otherProps.onKeyDown?.(e);
    };

    return (
        <li
            {...otherProps}
            role="option"
            tabIndex={isDisabled ? undefined : -1}
            className={"atlas-select--option " + (otherProps.className || "")}
            aria-selected={isSelected}
            aria-disabled={isDisabled}
            // aria-posinset={index}
            // aria-setsize={itemsToRender.length}
            onKeyDown={handleKeyDown}
            onClick={handleOptionClick}>
            {children || textValue}
        </li>
    );
};
