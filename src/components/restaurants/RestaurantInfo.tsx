import { Box, Button, Dialog, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import Link from 'next/link';

type Props = {
  isOpen: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  url: string;
  description: string;
  image: string;
}

const RestaurantInfo: React.FC<Props> = ({ isOpen, handleClose, name, url, description, image }) => {
  return (
    <Modal open={isOpen} onClose={handleClose} >
      <BoxWrapper>
        <Button onClick={handleClose}>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 4px;
`

export default RestaurantInfo;
