import React from 'react';
import styled from '@emotion/styled';

import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';
import {ImageCacheProvider} from '@app/utils/hooks/useProgressiveImg';
import ThemeProvider from '@app/utils/context/colorMode';

import './app.css';

const PageWrapper = styled.div`
  padding-top: 3.5rem;
  margin-top: 0rem;
  display: grid;
  grid-template-rows: 1fr 4rem;
`;

const ContentWrap = styled.div`
  grid-row: 1 / 2;
`;

const FooterWrap = styled.div`
  place-items: center;
  grid-row: 2 / 3;
`;

export default function App({children}: {children: React.ReactNode}) {
  const setInitialTheme = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';

      if (hasPersistedPreference) {
        return persistedColorPreference;
      }

      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }

      return 'light';
    }

    const colorMode = getInitialColorMode();
    document.body.dataset.theme = colorMode;
  })()`;
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
    <body>
      <script dangerouslySetInnerHTML={{__html: setInitialTheme}} />
      <ImageCacheProvider>
          <ThemeProvider>
            <Navbar className="h-14" />
          </ThemeProvider>

          {/* <LazyMotion features={domAnimation}> */}
          <PageWrapper>
            <ContentWrap>
              <main className="z-0 mb-16 max-h-full overflow-hidden">
              {children}
              </main>
            </ContentWrap>
            <FooterWrap>
              <Footer className="h-16" />
            </FooterWrap>
          </PageWrapper>
          {/* </LazyMotion> */}
        </ImageCacheProvider>
    </body>
  </html>
  );
}