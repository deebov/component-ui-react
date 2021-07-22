import { forwardRef, HTMLAttributes, KeyboardEventHandler, MouseEventHandler } from "react";
import { useSelectContext } from "./SelectContext";
import { useMergedRef } from "../../hooks/useMergedRef";

export interface TriggerProps extends HTMLAttributes<HTMLButtonElement> {}

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>((props, ref) => {
    const {
        state,
        isDisabled,
        trigger: { ref: triggerRef },
        listbox: { ref: listboxRef },
    } = useSelectContext();

    const mergedRef = useMergedRef(ref, triggerRef);

    const onOpen = (viaKeyboard?: boolean) => {
        state.open();
        setTimeout(() => {
            const selectedElement = listboxRef.current?.querySelector('[aria-selected="true"]');
            if (selectedElement) {
                if (selectedElement.getAttribute("aria-disabled") !== "true") {
                    (selectedElement as HTMLElement).focus();
                }
            } else {
                if (viaKeyboard) {
                    const firstEl = listboxRef.current?.querySelector('[role="option"]');
                    if (firstEl) {
                        (firstEl as HTMLElement).focus();
                        return;
                    }
                }
                listboxRef.current?.focus();
            }
        }, 0);
    };

    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (isDisabled) return;
        if (state.isOpen) {
            state.close();
        } else {
            onOpen();
        }
        props.onClick?.(e);
    };

    const handleKeydown: KeyboardEventHandler = (e) => {
        if (isDisabled) return;
        if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === 'Enter' || e.key === ' ') {
            onOpen(true);
        }
    };

    return (
        <button
            {...props}
            ref={mergedRef}
            className={"atlas-select--trigger " + (props.className || "")}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-haspopup="listbox"
            aria-expanded={state.isOpen}
            aria-labelledby="atlas-select--label atlas-select--trigger-value"
            onClick={handleTriggerClick}
            onKeyDown={handleKeydown}>
            <span id={"atlas-select--trigger-value"} className="atlas-select--trigger-value" style={{pointerEvents:'none'}}>
                {props.children}
            </span>
        </button>
    );
});
