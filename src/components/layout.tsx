import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import Category from './category/Category'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Category />
      <MainContainer>{children}</MainContainer>
    </>
  )
};

const MainContainer = styled.main`
  margin-top: 120px;
`

export default Layout;
