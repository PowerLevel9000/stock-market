import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const activeCompany = 'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=868f9e97f8723a6742f3ae0b41dad29a ';
const topGainer = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=868f9e97f8723a6742f3ae0b41dad29a ';
const topLosser = 'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=868f9e97f8723a6742f3ae0b41dad29a ';

const initialState = {
  // placeholder Data in case application break due to Limited requests
  matrics: [
    {
      symbol: 'MULN', name: 'Mullen Automotive, Inc.', price: 0.141, status: 0.009, statusPercentage: 6.8182,
    },
    {
      symbol: 'MULN', name: 'Mullen Automotive, Inc.', price: 0.141, status: -0.009, statusPercentage: 6.8182,
    },
    {
      symbol: 'MULN', name: 'Mullen Automotive, Inc.', price: 0.141, status: -0.009, statusPercentage: 6.8182,
    },
    {
      symbol: 'MULN', name: 'Mullen Automotive, Inc.', price: 0.141, status: 0.009, statusPercentage: 6.8182,
    },
  ],
  isLoading: false,
  Symbols: [],
  matricsType: 'ActiveCompany',
  error: '',
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
    setMatricsType: (state, { payload }) => {
      const newType = payload;
      return {
        ...state,
        matricsType: newType,
      };
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
    builder.addCase(getActiveCompany.fulfilled, (state, action) => {
      const matrics = action.payload.map((matric) => ({
        symbol: matric.symbol,
        name: matric.name,
        price: matric.price,
        status: matric.change,
        statusPercentage: matric.changesPercentage,
      }));

      return {
        ...state,
        matrics,
        isLoading: false,
        matricsType: 'ActiveCompany',
      };
    });
    builder.addCase(getTopGainer.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getTopGainer.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopGainer.fulfilled, (state, action) => {
      const matrics = action.payload.map((matric) => ({
        symbol: matric.symbol,
        name: matric.name,
        price: matric.price,
        status: matric.change,
        statusPercentage: matric.changesPercentage,
      }));

      return {
        ...state,
        matrics,
        isLoading: false,
        matricsType: 'TopGainer',
      };
    });
    builder.addCase(getTopLosser.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getTopLosser.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getTopLosser.fulfilled, (state, action) => {
      const matrics = action.payload.map((matric) => ({
        symbol: matric.symbol,
        name: matric.name,
        price: matric.price,
        status: matric.change,
        statusPercentage: matric.changesPercentage,
      }));

      return {
        ...state,
        matrics,
        isLoading: false,
        matricsType: 'TopLosser',
      };
    });
  },
});

export const { setMatricsType } = mattricsSlice.actions;
export default mattricsSlice.reducer;
