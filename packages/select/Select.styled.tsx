import { Divider, Option, Root, Section, Trigger } from ".";
import { css, styled } from "../core";

export const StyledRoot = styled(Root, {
    position: "relative",
});

export const StyledTrigger = styled(Trigger, {
    color: "$selectTriggerColor",
    background: "$selectTriggerBg",
    borderRadius: '$2',
    pl: "$15",
    pr: "$10",
    py: "$5",
    border: "1px solid $selectTriggerBorderColor",
    fontFamily: "$main",
    fontSize: "$2",
    cursor: "pointer",
    transition: "all 100ms ease-in-out",
    minW: 100,
    lineHeight: 1.4,

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
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center'
    },
});

export const listboxStyle = css({
    background: '$selectListboxBg',
    listStyle: "none",
    boxShadow: "$md",
    overflowY: "auto",

    m: 0,
    px: 0,
    py: "$5",
    borderRadius: 4,
    border: "1px solid $selectListboxBorderColor",

    width: "max-content",
    minW: 180,
    maxW: 280,
    maxH: 300,

    position: "absolute",
    top: "calc(100% + $space$5)",
    left: 0,
    
    '&:focus': {
        outline: 'none',
    }
});

export const StyledDivider = styled(Divider, {
    my: "$5",
    background: "$selectDividerBg",
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
    mt: "$3",
    color: "$selectDescriptionColor",
    lineHeight: 1.4
});

export const StyledOption = styled(Option, {
    m: 0,
    fontSize: "$2",
    cursor: "pointer",
    color: "$selectOptionColor",
    py: "$5",
    pl: "$40",
    pr: "$20",
    position: "relative",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
        background: "$selectOptionHoverBg",
    },
    "&:focus": {
        outline: "none",
        boxShadow: "inset 0 0 0 2px $colors$primary400",
    },
    // Styles for the selected state
    '&[aria-selected="true"]': {
        background: "$selectOptionSelectedBg",
        color: "$selectOptionSelectedColor",

        [`& ${checkIconStyle.selector}`]: {
            opacity: 1,
        },
        [`& ${StyledDescription.selector}`]: {
            color: "$selectOptionSelectedColor",
        },
    },
    // Styles for the disabled state
    '&[aria-disabled="true"]': {
        cursor: "not-allowed",
        opacity: 0.6,
    },
});

export const StyledPlaceholder = styled("span", {
    color: "$selectPlaceholderColor",
});
