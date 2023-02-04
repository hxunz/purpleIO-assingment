import { useAppDispatch, useAppSelector } from '@/hooks';
import { loadRestaurants } from '@/redux/restaurantSlice';
import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import styled from '@emotion/styled';

const RestaurantList = () => {
  const dispatch = useAppDispatch();

  const { restaurants } = useAppSelector(store => store.restaurant);

  useEffect(() => {
    dispatch(loadRestaurants())
  }, []);

  return (
    <Wrapper>
      <Text>EAT</Text>
      <CardWrapper>
        {restaurants.map(({
          image,
        }) => (
          <CardContainer>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
              />
            </CardActionArea>
          </CardContainer>
        ))}
      </CardWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 1024px;
  margin: 100px auto 0 auto;
`

const Text = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: .02em;
  padding-left: 16px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const CardContainer = styled(Card)`
  width: 200px;
  height: 200px;
  margin: 1rem;
`

export default RestaurantList;
