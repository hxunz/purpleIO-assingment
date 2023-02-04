import { httpClient } from './api';

export const getRestaurant = async () => {
  try {
    const { data } = await httpClient.get('/stores');

    return data;
  } catch (error) {
    console.error(error);
  }
};
