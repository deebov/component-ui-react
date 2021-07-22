import { ForwardedRef, forwardRef, HTMLAttributes, KeyboardEventHandler, RefObject, useEffect, useRef } from "react";
import { useMergedRef, useOnClickOutside } from "../../hooks";
import { UseSelectStateReturn } from "../hooks/useSelectState";
import { focusableSelectors, focusFirst, focusLast, focusNext, focusPrevious, Keys } from "../Select.util";
import { OptionProps } from "./Option";
import { useSelectContext } from "./SelectContext";

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
    const focusableElementsRef = useRef<NodeListOf<HTMLElement>>();

    useOnClickOutside(listboxRef, (e) => {
        // Do not close if event.target is the trigger. Becaue the trigger will close it itself.
        const isTrigger = (e.target as HTMLElement).isSameNode(triggerRef.current);
        if (!isTrigger) {
            closeWithFocus();
        }
    });

    useEffect(() => {
        if (!listboxRef.current) return;

        const focusableElements = listboxRef.current.querySelectorAll(focusableSelectors);
        focusableElementsRef.current = focusableElements as NodeListOf<HTMLElement>;
    }, []);

    const handleListboxKeydown: KeyboardEventHandler<HTMLUListElement> = (e) => {
        const focusableElements = focusableElementsRef.current || (new NodeList() as NodeListOf<HTMLElement>);

        if (e.key === Keys.ArrowDown) {
            // Set focus to the first focusable Element if no option is in focus
            if (document.activeElement?.isSameNode(e.currentTarget)) {
                focusFirst(focusableElements);
                // Set focus to the next focusable Element
            } else if (e.currentTarget.contains(document.activeElement)) {
                focusNext(focusableElements);
            }
        } else if (e.key === Keys.ArrowUp) {
            // Set focus to the least focusable Element if no option is in focus
            if (document.activeElement?.isSameNode(e.currentTarget)) {
                focusLast(focusableElements);
                // Set focus to the previous focusable Element
            } else if (e.currentTarget.contains(document.activeElement)) {
                focusPrevious(focusableElements);
            }
        } else if (e.key === Keys.Home) {
            focusFirst(focusableElements);
        } else if (e.key === Keys.End) {
            focusLast(focusableElements);
        } else if (e.key === Keys.Escape) {
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
