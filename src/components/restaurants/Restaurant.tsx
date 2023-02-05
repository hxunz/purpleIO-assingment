import styled from '@emotion/styled';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import { useState } from 'react';
import RestaurantInfo from './RestaurantInfo';

type Props = {
  name: string;
  url: string;
  thumb: string;
  description: string;
  image: string;
}

const Restaurant: React.FC<Props> = ({ name, url, thumb, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <RestaurantInfo
          isOpen={isOpen}
          handleClose={handleClickClose}
          name={name}
          url={url}
          description={description}
          image={image}
        />
      )}
      <CardContainer>
        <CardActionArea>
          <CardMedia
            component="img"
            image={thumb}
            onClick={handleClickOpen}
          />
        </CardActionArea>
      </CardContainer>
    </>
  )
};

const CardContainer = styled(Card)`
  width: 200px;
  height: 200px;
  margin: 1rem;
`

export default Restaurant;
