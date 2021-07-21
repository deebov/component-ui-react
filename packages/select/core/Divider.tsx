import { forwardRef, HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLElement> {}

export const Divider = forwardRef<HTMLLIElement, DividerProps>((props, ref) => {
    return (
        <li
            {...props}
            ref={ref}
            role="separator"
            className={"atlas-select--divider " + (props.className || "")}
            style={{ width: "100%", height: 1, ...props.style }}
        />
    );
});
