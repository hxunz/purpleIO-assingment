import { memo } from 'react';

import { Card, CardActionArea, CardMedia } from '@mui/material';

import styled from '@emotion/styled';

import { Restaurant } from '@/redux/restaurantSlice';

type Props = {
  restaurant: Restaurant;
  onClick(restaurant: Restaurant): void;
}

const RestaurantCard: React.FC<Props> = ({ restaurant, onClick }) => {
  const { thumb } = restaurant;

  const handleClick = () => {
    onClick(restaurant);
  }

  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumb}
          onClick={handleClick}
        />
      </CardActionArea>
    </CardContainer>
  )
};

const CardContainer = styled(Card)`
  width: 200px;
  height: 200px;
  margin: 1rem;
`

export default memo(RestaurantCard);
