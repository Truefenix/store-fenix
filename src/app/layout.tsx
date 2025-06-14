import { GlobalStyles } from '../style/global-styles';
import { metadata } from '../lib/seo-metadata';
import ThemeProviderWrapper from '@/components/layout/ThemeProviderWrapper';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link rel="icon" type="image/png" href="/vercel.svg" />
      <body>
        <ThemeProviderWrapper>
          <GlobalStyles />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
