import { configureStore } from '@reduxjs/toolkit';
import matricsReducer from './home/homeSlice';
import imgReducer from './carousel/carousel';
import detailsReducer from './details/details';
import blalanceSheetReducer from './blalanceSheet/blalanceSheetSlice';

const store = configureStore({
  reducer: {
    matricsReducer,
    imgReducer,
    detailsReducer,
    blalanceSheetReducer,
  },
});

export default store;
