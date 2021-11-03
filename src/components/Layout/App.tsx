import React from 'react';
import styled from '@emotion/styled';

import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';
import {ImageCacheProvider} from '@app/utils/hooks/useProgressiveImg';
import ThemeProvider from '@app/utils/context/colorMode';

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

type AppProps = {
  children: React.ReactNode,
}

const App = ({children}: AppProps) => {
  return (
    <ImageCacheProvider>
      <ThemeProvider>
        <Navbar className="h-14" />
      </ThemeProvider>

      {/* <LazyMotion features={domAnimation}> */}
      <PageWrapper>
        <ContentWrap>
          <main className="z-0 mb-16 mt-8 max-h-full overflow-hidden">
            {children}
          </main>
        </ContentWrap>
        <FooterWrap>
          <Footer className="h-16" />
        </FooterWrap>
      </PageWrapper>
      {/* </LazyMotion> */}
    </ImageCacheProvider>
  );
};

export default App;
