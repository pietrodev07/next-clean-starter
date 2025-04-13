import { PropsWithChildren } from "react";
import { ThemesProvider } from "./theme-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemesProvider>{children}</ThemesProvider>;
};
