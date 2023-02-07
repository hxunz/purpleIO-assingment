import { Box, Button, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Restaurant } from '@/redux/restaurantSlice';

type Props = {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  restaurant?: Restaurant;
}

const RestaurantModal: React.FC<Props> = ({
  isOpen,
  onClose,
  restaurant,
}: Props) => {
  if (!restaurant) {
    return null;
  }

  const { image, name, description, url } = restaurant;

  return (
    <Modal open={isOpen} onClose={onClose} >
      <BoxWrapper>
        <ClsoeButton onClick={onClose}>
          <CloseIcon />
        </ClsoeButton>
        <ContentWrapper>
          <Title>
            {name}
          </Title>
          <Img src={image} />
          <Context>
            {description}
          </Context>
          {url && (
            <StoreLink href={url} target='_blank'>
              매장 정보 보기
            </StoreLink>
          )}
        </ContentWrapper>
      </BoxWrapper>
    </Modal >
  )
};

const BoxWrapper = styled(Box)`
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 4px;
`

const ContentWrapper = styled.div`
  padding: 30px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`

const Img = styled.img`
  width: 300px;
`

const Context = styled.div`
  margin-top: 20px;
  letter-spacing: 1px;
  white-space: pre-line;
  font-size: 12px;
`

const ClsoeButton = styled(Button)`
  position: absolute;
  right: 0;
`

const StoreLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: black;
  margin-top: 15px;
`

export default RestaurantModal;
