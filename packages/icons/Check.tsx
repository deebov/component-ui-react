import { StyledSVG, IconProps } from "./Icon";

export const Check = (props: IconProps) => {
    return (
        <StyledSVG
            width="24px"
            height="24px"
            viewBox="0 0 17 15"
            stroke="none"
            fill="none"
            fillRule="evenodd"
            {...props}>
            <polyline id="path" stroke="currentColor" strokeWidth="2" points="12.5 4.5 7 11 3.5 7.5"></polyline>
        </StyledSVG>
    );
};
