import { mainTheme } from "./theme";
import { PositionProperty } from "@stitches/react/types/css-types";

type SPACE = number | string | keyof typeof mainTheme.space;

export const utils = {
  centered: (config) => (value: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  pos: (config) => (value: PositionProperty) => ({
    position: value,
  }),

  m: (config) => (value: SPACE) => ({
    margin: value,
  }),
  ml: (config) => (value: SPACE) => ({
    marginLeft: value,
  }),
  mr: (config) => (value: SPACE) => ({
    marginRight: value,
  }),
  mt: (config) => (value: SPACE) => ({
    marginTop: value,
  }),
  mb: (config) => (value: SPACE) => ({
    marginBottom: value,
  }),
  mx: (config) => (value: SPACE) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (config) => (value: SPACE) => ({
    marginTop: value,
    marginBottom: value,
  }),

  p: (config) => (value: SPACE) => ({
    padding: value,
  }),
  pl: (config) => (value: SPACE) => ({
    paddingLeft: value,
  }),
  pr: (config) => (value: SPACE) => ({
    paddingRight: value,
  }),
  pt: (config) => (value: SPACE) => ({
    paddingTop: value,
  }),
  pb: (config) => (value: SPACE) => ({
    paddingBottom: value,
  }),
  px: (config) => (value: SPACE) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (config) => (value: SPACE) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  bg: (config) => (value: string | keyof typeof mainTheme.colors) => ({
    background: value,
  }),

  bgColor: (config) => (value: string | keyof typeof mainTheme.colors) => ({
    backgroundColor: value,
  }),

  minW: (config) => (value: SPACE) => ({
    minWidth: value,
  }),
  maxW: (config) => (value: SPACE) => ({
    maxWidth: value,
  }),
  minH: (config) => (value: SPACE) => ({
    minHeight: value,
  }),
  maxH: (config) => (value: SPACE) => ({
    maxHeight: value,
  }),
  size: (config) => (value: SPACE) => ({
    width: value,
    height: value,
  }),
};
