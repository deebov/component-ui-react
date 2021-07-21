import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
export const Section = (props: SectionProps) => {
    return (
        <div {...props} role="group" className={"atlas-select--section " + (props.className || "")}>
            {props.children}
        </div>
    );
};
