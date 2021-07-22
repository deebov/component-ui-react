import { ForwardedRef, forwardRef, HTMLAttributes, KeyboardEventHandler, RefObject } from "react";
import { OptionProps } from "./Option";
import { useSelectContext } from "./SelectContext";
import { UseSelectStateReturn } from "../hooks/useSelectState";
import { useMergedRef } from "../hooks/useMergedRef";
import { useRef } from "react";
import { useEffect } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const focusableSelectors = 'li[role="option"][tabindex]:not([aria-disabled]):not([hidden])';

export interface ListboxProps<TItem extends object> extends HTMLAttributes<HTMLUListElement> {
    items?: TItem[];
    children: (item: TItem, state: UseSelectStateReturn) => React.ReactElement<OptionProps>;
}
export const ListboxBase = <TItem extends object>(props: ListboxProps<TItem>, ref: ForwardedRef<HTMLUListElement>) => {
    const { items, children, ...otherProps } = props;
    const {
        state,
        closeWithFocus,
        trigger: { ref: triggerRef },
        listbox: { ref: listboxRef },
    } = useSelectContext();
    const mergedRef = useMergedRef(ref, listboxRef);
    const focusableElementsRef = useRef<NodeListOf<Element>>();

    useOnClickOutside(listboxRef, (e) => {
        // Do not close if event.target is the trigger. Becaue the trigger will close it itself.
        const isTrigger = (e.target as HTMLElement).isSameNode(triggerRef.current)
        if(!isTrigger) {
            closeWithFocus()
        }
    });

    useEffect(() => {
        if (!listboxRef.current) return;

        const focusableElements = listboxRef.current.querySelectorAll(focusableSelectors);
        focusableElementsRef.current = focusableElements;
    }, []);

    const handleListboxKeydown: KeyboardEventHandler<HTMLUListElement> = (e) => {
        const focusableElements = focusableElementsRef.current || [];

        if (e.key === "ArrowDown") {
            // Set focus to the first focusable Element if no option is in focus
            if (document.activeElement?.isSameNode(e.currentTarget)) {
                const firstEl = focusableElements?.[0];
                if (firstEl) {
                    (firstEl as HTMLElement).focus();
                }
                // Set focus to the next focusable Element
            } else if (e.currentTarget.contains(document.activeElement)) {
                const currentIndex = Array.from(focusableElements).findIndex((el) =>
                    el.isSameNode(document.activeElement)
                );
                if (currentIndex + 1 !== focusableElements.length) {
                    const nextEl = focusableElements[currentIndex + 1];
                    (nextEl as HTMLElement).focus();
                }
            }
        } else if (e.key === "ArrowUp") {
            // Set focus to the least focusable Element if no option is in focus
            if (document.activeElement?.isSameNode(e.currentTarget)) {
                const lastEl = focusableElements[focusableElements.length - 1];
                if (lastEl) {
                    (lastEl as HTMLElement).focus();
                }
                // Set focus to the previous focusable Element
            } else if (e.currentTarget.contains(document.activeElement)) {
                const currentIndex = Array.from(focusableElements).findIndex((el) =>
                    el.isSameNode(document.activeElement)
                );
                if (currentIndex > 0) {
                    const prevEl = focusableElements[currentIndex - 1];
                    (prevEl as HTMLElement).focus();
                }
            }
        } else if (e.key === "Escape") {
            closeWithFocus();
        }

        props.onKeyDown?.(e);
    };

    return (
        <ul
            {...otherProps}
            ref={mergedRef}
            role="listbox"
            tabIndex={-1}
            className={"atlas-select--listbox " + (props.className || "")}
            onKeyDown={handleListboxKeydown}>
            {typeof props.children === "function" && items
                ? items.map((item) => props.children(item, state))
                : props.children}
        </ul>
    );
};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
export const Listbox = forwardRef(ListboxBase) as <TItem extends object>(
    props: ListboxProps<TItem> & { ref?: RefObject<HTMLUListElement> }
) => React.ReactElement;
