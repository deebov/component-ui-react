import React from "react";
import { Check } from "../icons/Check";
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
