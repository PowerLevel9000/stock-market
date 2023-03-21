import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const activeCompany = 'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=5d722d15c608f551c39bf2767d7e99dc';
const topGainer = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=5d722d15c608f551c39bf2767d7e99dc';
const topLosser = 'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=5d722d15c608f551c39bf2767d7e99dc';

const initialState = {
  mattrics: [],
  isLoading: false,
  Symbols: [],
  mattricsType: '',
};

export const getActiveCompany = createAsyncThunk('/missions/getActiveCompany', async () => {
  const response = await fetch(activeCompany);
  const data = await response.json();
  return data;
});
export const getTopLosser = createAsyncThunk('/missions/getTopLosser', async () => {
  const response = await fetch(topLosser);
  const data = await response.json();
  return data;
});
export const getTopGainer = createAsyncThunk('/missions/getTopGainer', async () => {
  const response = await fetch(topGainer);
  const data = await response.json();
  return data;
});

const mattricsSlice = createSlice({
  name: 'matrics',
  initialState,
  reducers: {
    setMatrics: () => {
      console.log('hello form SetMatrics');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getActiveCompany.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getActiveCompany.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getActiveCompany.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopGainer.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getTopGainer.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopGainer.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopLosser.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getTopLosser.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopLosser.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const { setMatrics } = mattricsSlice.actions;
export default mattricsSlice.reducer;
