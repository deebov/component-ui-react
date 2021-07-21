import { globalStyles } from "../stitches/config";

export const AppWrapper = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};
