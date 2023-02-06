
import { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { useRestaurants } from '../../hooks/useRestaurants';

import RestaurantCard from './RestaurantCard';
import RestaurantInfo from './RestaurantInfo';
import { Restaurant } from '@/redux/restaurantSlice';

const RestaurantList = () => {
  const { restaurants, getRestaurants } = useRestaurants();

  const [selectedRestaurant, selectRestaurant] = useState<Restaurant | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback((restaurant: Restaurant) => {
    selectRestaurant(restaurant);
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <RestaurantInfo
        isOpen={isOpen}
        restaurant={selectedRestaurant}
        onClose={handleClose}
      />
      <Card>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={handleClick}
          />
        ))}
      </Card>
    </>
  )
};

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export default RestaurantList;
