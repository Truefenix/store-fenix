'use client';

import { GlobalStyles } from '@/style/global-styles';
import { theme } from '@/style/theme';
import { ThemeProvider } from 'styled-components';

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
