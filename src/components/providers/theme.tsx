"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type TThemeProvider = React.ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: TThemeProvider) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export default ThemeProvider;
