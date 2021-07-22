import { Check } from "../icons";
import { checkIconStyle, StyledDescription, StyledOption } from "./Select.styled";
import { TOption, TOptions } from "./Select.types";

/**
 * A helper function that returns true if the provided options array has its own options which means it's a Section
 * @param options Options array
 * @returns {boolean}
 */
export const isSection = (options: TOption | TOptions): options is TOptions => {
    return (options as TOptions).options !== undefined;
};

export const renderCustomOption = (option: TOption) => {
    return (
        <StyledOption key={option.value} value={option.value} textValue={option.label} isDisabled={option.isDisabled}>
            <Check aria-hidden="true" className={checkIconStyle.toString()} />
            {option.label}
            {option.description && <StyledDescription>{option.description}</StyledDescription>}
        </StyledOption>
    );
};

/**
 * Set active focus to the first item in focusableElements
 * @param {NodeListOf<HTMLElement} focusableElements - NodeList of HTML elements
 */
export const focusFirst = (focusableElements: NodeListOf<HTMLElement>) => {
    const firstEl = focusableElements?.[0];
    if (firstEl) {
        firstEl.focus();
    }
};

/**
 * Set active focus to the last item in focusableElements
 * @param {NodeListOf<HTMLElement} focusableElements - NodeList of HTML elements
 */
export const focusLast = (focusableElements: NodeListOf<HTMLElement>) => {
    const lastEl = focusableElements[focusableElements.length - 1];
    if (lastEl) {
        lastEl.focus();
    }
};

/**
 * Set active focus to the next item in focusableElements
 * @param {NodeListOf<HTMLElement} focusableElements - NodeList of HTML elements
 */
export const focusNext = (focusableElements: NodeListOf<HTMLElement>) => {
    const currentIndex = Array.from(focusableElements).findIndex((el) => el.isSameNode(document.activeElement));
    if (currentIndex + 1 !== focusableElements.length) {
        const nextEl = focusableElements[currentIndex + 1];
        nextEl.focus();
    }
};

/**
 * Set active focus to the previous item in focusableElements
 * @param {NodeListOf<HTMLElement} focusableElements - NodeList of HTML elements
 */
export const focusPrevious = (focusableElements: NodeListOf<HTMLElement>) => {
    const currentIndex = Array.from(focusableElements).findIndex((el) => el.isSameNode(document.activeElement));
    if (currentIndex > 0) {
        const prevEl = focusableElements[currentIndex - 1];
        prevEl.focus();
    }
};

export const focusableSelectors = 'li[role="option"][tabindex]:not([aria-disabled]):not([hidden])';

export enum Keys {
    Enter = "Enter",
    Space = " ",
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    Home = "Home",
    End = "End",
    Escape = "Escape",
}
