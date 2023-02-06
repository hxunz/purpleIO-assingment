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
        <Button onClick={onClose} style={{ position: 'absolute', right: 0 }}>
          <CloseIcon />
        </Button>
        <img src={image} />
        <div>
          {name}
        </div>
        <div>
          {description}
        </div>
        {url && (
          <Link href={url} target='_blank'>
            <div>
              가게 정보
            </div>
          </Link>
        )}
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

export default RestaurantModal;
