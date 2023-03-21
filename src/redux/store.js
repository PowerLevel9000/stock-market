import { configureStore } from '@reduxjs/toolkit';
import matricsReducer from './home/homeSlice';

const store = configureStore({
  reducer: matricsReducer,
});

export default store;
