import { addDecorator } from "@storybook/react";
import * as React from "react";
import { darkTheme, theme } from "../packages/core";
import { Wrapper } from "./Wrapper";

addDecorator((StoryFn: Function) => (
  <Wrapper>
    <StoryFn />
  </Wrapper>
));

export const parameters = {
  backgrounds: { disable: true },
  themes: {
    default: "light",
    list: [
      { name: "light", class: "", color: theme.colors.mainBgColor.value },
      // @ts-ignore
      { name: "dark", class: darkTheme.toString(), color: '#121523' },
    ],
  },
};
