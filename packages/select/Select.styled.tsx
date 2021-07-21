import { Divider, Option, Root, Section, Trigger } from ".";
import { css, styled } from "../core";

export const StyledRoot = styled(Root, {
    position: "relative",
});

export const StyledTrigger = styled(Trigger, {
    color: "$darkText",
    background: "none",
    borderRadius: 4,
    px: "$10",
    py: "$5",
    border: "1px solid $gray500",
    fontFamily: "$main",
    fontSize: "$2",
    cursor: "pointer",
    transition: "all 100ms ease-in-out",

    "&:focus": {
        outline: "none",
        borderColor: "$primary400",
        boxShadow: "0 0 0 2px $colors$primary300",
    },
    "&:disabled": {
        cursor: "not-allowed",
    },
    // Trigger wraps its children into a span.atlas-select--trigger-value. So here we center that inner span.
    "& > .atlas-select--trigger-value": {
        centered: true,
    },
});

export const listboxStyle = css({
    listStyle: "none",
    boxShadow: "$md",
    px: 0,
    py: "$5",
    m: 0,
    borderRadius: 4,
    border: "1px solid $colors$gray300",
    minW: 180,
    maxW: 280,
    width: "max-content",
    maxH: 300,
    overflowY: "auto",
    position: "absolute",
    top: "calc(100% + $space$5)",
    left: 0,

    '&:focus': {
        outline: 'none',
        borderColor: '$primary400'
    }
});

export const StyledDivider = styled(Divider, {
    my: "$5",
    background: "$gray200",
});

export const StyledSection = styled(Section, {
    // Make sure that last Section does not display a divider
    [`&:last-child ${StyledDivider.selector}`]: {
        display: "none",
    },
});

export const checkIconStyle = css({ position: "absolute", left: "$10", top: "$5", size: 18, opacity: 0 });

export const StyledDescription = styled("span", {
    fontSize: "$1",
    mt: "$5",
    color: "$secondaryDarkText",
});

export const StyledOption = styled(Option, {
    m: 0,
    fontSize: "$2",
    cursor: "pointer",
    color: "$darkText",
    py: "$5",
    pl: "$40",
    position: "relative",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
        background: "$gray200",
    },
    "&:focus": {
        outline: "none",
        boxShadow: "inset 0 0 0 2px $colors$primary400",
    },
    // Styles for the selected state
    '&[aria-selected="true"]': {
        background: "$primary300",
        color: "$lightText",

        [`& ${checkIconStyle.selector}`]: {
            opacity: 1,
        },
        [`& ${StyledDescription.selector}`]: {
            color: "$lightText",
        },
    },
    // Styles for the disabled state
    '&[aria-disabled="true"]': {
        cursor: "not-allowed",
        opacity: 0.6,
    },
});

export const StyledPlaceholder = styled("span", {
    color: "$gray400",
});
