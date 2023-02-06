import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import Category from './category/Category'
import Footer from './footer/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Category />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
};

const MainContainer = styled.main`
  margin-top: 120px;
`

export default Layout;
