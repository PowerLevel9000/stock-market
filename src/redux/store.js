import { configureStore } from '@reduxjs/toolkit';
import matricsReducer from './home/homeSlice';
import imgReducer from './carousel/carousel';

const store = configureStore({
  reducer: {
    matricsReducer,
    imgReducer,
  },
});

export default store;
