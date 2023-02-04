import { getRestaurant } from '@/service/restaurant';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from './store';

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
  thumb: string;
}

export interface restaurantState {
  restaurants: Restaurant[];
}

export const initialState: restaurantState = {
  restaurants: [],
};

const { actions, reducer } = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurants: (state, { payload }) => ({
      ...state,
      restaurants: payload,
    })
  }
});

export const {
  setRestaurants
} = actions;

export function loadRestaurants() {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getRestaurant();

      dispatch(setRestaurants(data));
    } catch (error) {
      console.error(error)
    }
  };
}

export default reducer;
