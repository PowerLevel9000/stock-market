import { configureStore } from '@reduxjs/toolkit';
import matricsReducer from './home/homeSlice';
import imgReducer from './carousel/carousel';
import detailsReducer from './details/details';

const store = configureStore({
  reducer: {
    matricsReducer,
    imgReducer,
    detailsReducer,
  },
});

export default store;
