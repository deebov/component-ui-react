import { Key } from "react";

export type TOption = {
    /**
     * A label for an option that will be displayed.
     */
    label: string;
    /**
     * A unique string or number value
     */
    value: Key;
    /**
     * Description of an option that will be displayed in lower visual hierarchy.
     */
    description?: string;
    /**
     * If `true`, the option cannot be selected.
     */
    isDisabled?: boolean;
};

export type TOptions = {
    /**
     * A label for screen-readers. This won't be displayed.
     */

    label: string;
    /**
     * Array of options
     */
    options: TOption[];
};
