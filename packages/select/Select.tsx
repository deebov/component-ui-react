import React, { useMemo } from "react";
import { Listbox, useSelectState } from ".";
import { ChevronDown } from "../icons";
import { UseSelectStateOptions } from "./hooks/useSelectState";
import {
    listboxStyle,
    StyledDivider,
    StyledPlaceholder,
    StyledRoot,
    StyledSection,
    StyledTrigger,
} from "./Select.styled";
import type { TOption, TOptions } from "./Select.types";
import { isSection, renderCustomOption } from "./Select.util";

export interface AtlasSelectProps extends UseSelectStateOptions {
    /**
     * Array of options to display. It can either be an array of `Options` or `Option`.
     */
    options: (TOption | TOptions)[];
    /**
     * A string value that will be displayed when no option is selected.
     */
    placeholder?: string;
    /**
     * If true, the select will ignore user interactions and sets `disabled` attribute to true.
     */
    isDisabled?: boolean;
}

export const AtlasSelect = (props: AtlasSelectProps) => {
    const state = useSelectState(props);
    const selectedItem = useMemo(
        () =>
            props.options
                ?.flatMap((option) => (isSection(option) ? option.options : option))
                .find((opt) => opt.value === state.value),
        [props.options, state.value]
    );

    return (
        <StyledRoot state={state} isDisabled={props.isDisabled}>
            <StyledTrigger>
                {selectedItem?.label || (
                    <StyledPlaceholder>{props.placeholder || "Select an option..."}</StyledPlaceholder>
                )}
                <ChevronDown css={{ ml: "$15" }} />
            </StyledTrigger>

            {state.isOpen && (
                // Use classname styling approach for Listbox to avoid conflicting Typescript types
                <Listbox items={props.options} className={listboxStyle.toString()}>
                    {(item, state) => {
                        if (isSection(item)) {
                            return (
                                <StyledSection aria-label={item.label}>
                                    {item.options.map((opt) => renderCustomOption(opt))}
                                    <StyledDivider />
                                </StyledSection>
                            );
                        }
                        return renderCustomOption(item);
                    }}
                </Listbox>
            )}
        </StyledRoot>
    );
};
