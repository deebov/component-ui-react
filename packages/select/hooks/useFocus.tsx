import { RefObject, useCallback, useEffect, useRef } from "react";
import { focusableSelectors, focusFirst, focusLast, focusNext, focusPrevious } from "../Select.util";

export interface UseFocusOptions {
    /**
     * The parent element within which the navigation will happen.
     */
    ref: RefObject<HTMLElement>;
}

/**
 * A React hook that exposes methods to navigate through focusable elements
 * within the given element.
 * 
 * @param {UseFocusOptions} options 
 * @returns 
 */
export const useFocus = (options: UseFocusOptions) => {
    const { ref } = options;
    const focusableElementsRef = useRef<NodeListOf<HTMLElement>>();
    const emptyNodeList = useRef(new NodeList() as NodeListOf<HTMLElement>);

    const safeFocusableElements = focusableElementsRef.current || emptyNodeList.current;

    useEffect(() => {
        if (!ref.current) return;

        const focusableElements = ref.current.querySelectorAll(focusableSelectors);
        focusableElementsRef.current = focusableElements as NodeListOf<HTMLElement>;
    }, []);

    const _focusFirst = useCallback(() => focusFirst(safeFocusableElements), [safeFocusableElements]);
    const _focusLast = useCallback(() => focusLast(safeFocusableElements), [safeFocusableElements]);
    const _focusNext = useCallback(() => focusNext(safeFocusableElements), [safeFocusableElements]);
    const _focusPrevious = useCallback(() => focusPrevious(safeFocusableElements), [safeFocusableElements]);

    return {
        focusFirst: _focusFirst,
        focusLast: _focusLast,
        focusNext: _focusNext,
        focusPrevious: _focusPrevious,
    };
};
