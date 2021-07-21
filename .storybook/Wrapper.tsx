import { globalStyles, theme } from "../packages/core";

export const Wrapper = ({ children }) => {
  globalStyles();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `body {background-color: ${theme.colors.mainBgColor.toString()}; transition: background-color 250ms ease;}`,
        }}
      />

      {children}
    </>
  );
};
