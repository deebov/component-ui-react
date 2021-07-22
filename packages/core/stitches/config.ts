import { createCss, StitchesCss, StitchesVariants } from "@stitches/react";

import { mainTheme } from "./theme";
import { utils } from "./utils";

const config = createCss({
  utils,
  theme: mainTheme,
});

export const { styled, css, keyframes, global, theme, config: stitchesConfig } = config;

export const darkTheme = theme({
  colors: {
      mainBgColor: '$gray600',

      selectDividerBg: '$gray400',
      selectListboxBg: '$gray500',
      selectListboxBorderColor: '$gray400',
      selectTriggerBg: '$gray500',
      selectTriggerBorderColor: '$gray400',
      selectTriggerColor: "$lightText",
      selectPlaceholderColor: '$gray400',
      selectOptionColor: '$lightText',
      selectOptionHoverBg: '$gray400',
      selectOptionSelectedBg: '$primary300',
      selectOptionSelectedColor: '$lightText',
      selectDescriptionColor: '$gray300'
  },
});
// console.log({...darkTheme})
export type CSS = StitchesCss<typeof config>;

export type StitchesProps<T> = StitchesVariants<T> & {
  css?: CSS;
};

export const globalStyles = global({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "$main",
    color: "#000",
  },
});
