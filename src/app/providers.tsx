"use client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

interface ProvidersProps {
  readonly children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
