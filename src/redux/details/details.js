import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
const apikey = '5d722d15c608f551c39bf2767d7e99dc';

export const getCompanyDetails = createAsyncThunk('details/getCompanyDetails', async (symbol = 'AAPL') => {
  const response = await fetch(`${baseUrl}${symbol}?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

const initialState = {
  // placeholder Data in case aplincation breake due to limitated requests
  details: [
    {
      symbol: 'AAPL',
      price: 157.83,
      beta: 1.297088,
      volAvg: 70701586,
      mktCap: 2497170441646,
      lastDiv: 0.92,
      range: '124.17-179.61',
      changes: -1.45,
      companyName: 'Apple Inc.',
      currency: 'USD',
      cik: '0000320193',
      isin: 'US0378331005',
      cusip: '037833100',
      exchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Consumer Electronics',
      website: 'https://www.apple.com',
      description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.',
      ceo: 'Mr. Timothy D. Cook',
      sector: 'Technology',
      country: 'US',
      fullTimeEmployees: '164000',
      phone: '408 996 1010',
      address: 'One Apple Park Way',
      city: 'Cupertino',
      state: 'CA',
      zip: '95014',
      dcfDiff: 4.15176,
      dcf: 150.082,
      image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      ipoDate: '1980-12-12',
      defaultImage: false,
      isEtf: false,
      isActivelyTrading: true,
      isAdr: false,
      isFund: false,
    },
  ],
  isLoading: false,
  querry: 'AAPL',
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
