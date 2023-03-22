import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
const apikey = '5d722d15c608f551c39bf2767d7e99dc';

export const getCompanyDetails = createAsyncThunk('details/getCompanyDetails', async (symbol = 'AAPL') => {
  const response = await fetch(`${baseUrl}${symbol}?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

const initialState = {
  details: [],
  isLoading: false,
  querry: '',
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setQuerry: (state, { payload }) => {
      const newQuerry = payload;
      return {
        ...state,
        querry: newQuerry,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCompanyDetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getCompanyDetails.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getCompanyDetails.fulfilled, (state, { payload }) => ({
      ...state,
      details: payload,
      isLoading: false,
    }));
  },
});

export const { setQuerry } = detailsSlice.actions;
export default detailsSlice.reducer;
