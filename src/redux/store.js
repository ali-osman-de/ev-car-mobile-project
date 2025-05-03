import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import carsByCategoryReducer from './carByCategorySlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    carsByCategory: carsByCategoryReducer
  },
});
