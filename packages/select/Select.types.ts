import { Key } from "react";

export type TOption = {
    label: string;
    value: Key;
    description?: string;
    isDisabled?: boolean;
};

export type TOptions = { label: string; options: TOption[] };
