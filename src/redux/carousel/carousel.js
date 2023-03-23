import { createSlice } from '@reduxjs/toolkit';
import img6 from '../../imgs/stock-banner.jpg';
import img1 from '../../imgs/stock-banner-1.jpg';
import img2 from '../../imgs/stock-banner-2.jpg';
import img3 from '../../imgs/stock-banner-6.jpg';
import img4 from '../../imgs/stock-banner-5.jpg';
import img5 from '../../imgs/stock-banner-4.jpg';

const initialState = {
  imgData: [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ],
};

const imgSlice = createSlice({
  name: 'image',
  initialState,
});

export default imgSlice.reducer;
