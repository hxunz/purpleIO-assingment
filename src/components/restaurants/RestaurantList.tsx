import { useAppDispatch, useAppSelector } from '@/hooks';
import { loadRestaurants } from '@/redux/restaurantSlice';
import { useEffect } from 'react';

import styled from '@emotion/styled';
import Restaurant from './Restaurant';

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
          id,
          name,
          url,
          thumb,
          description,
          image
        }) => (
          <Restaurant
            key={id}
            name={name}
            url={url}
            thumb={thumb}
            description={description}
            image={image}
          />
        ))}
      </CardWrapper>
    </Wrapper >
  )
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 1024px;
  margin: 0 auto;
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

export default RestaurantList;
