import { useAppDispatch, useAppSelector } from '@/hooks';
import { loadRestaurants } from '@/redux/restaurantSlice';

export const useRestaurants = () => {
  const dispatch = useAppDispatch();

  const { restaurants } = useAppSelector(store => store.restaurant);

  const getRestaurants = () => {
    dispatch(loadRestaurants())
  }

  return { restaurants, getRestaurants };
}
