import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='caption'>
        @ 2020 김현지
      </Typography>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  padding: 0 0 3rem 0;
  position: fixed;
  bottom: 0;
  z-index: 1;
`

export default Footer;
