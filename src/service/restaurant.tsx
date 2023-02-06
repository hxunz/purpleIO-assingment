import { httpClient } from './api';

export const getRestaurant = async () => {
  const { data } = await httpClient.get('/stores');

  return data;
};
