import { forwardRef, HTMLAttributes, MouseEventHandler } from "react";
import { useSelectContext } from "./SelectContext";

export interface LabelProps extends HTMLAttributes<HTMLElement> {}
export const Label = forwardRef<HTMLElement, LabelProps>((props, ref) => {
    const {
        label,
        trigger: { ref: triggerRef },
    } = useSelectContext();

    const handleLabelClick: MouseEventHandler<HTMLElement> = (e) => {
        triggerRef.current?.focus();
        props.onClick?.(e);
    };

    return (
        <span {...props} id="atlas-select--label" onClick={handleLabelClick}>
            {props.children || label}
        </span>
    );
});
