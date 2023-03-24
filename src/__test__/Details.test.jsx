import { screen, render } from '@testing-library/react';
import Details from '../components/Details';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Details container should be visible', () => {
  const mockStore = configureStore([]);
  const initialState = {
    detailsReducer: {
      details: [
        {
          image: '',
          companyName: '',
          symbol: '',
          price: 1,
          changes: 2,
          volAvg: 3,
          mktCap: 4,
          lastDiv: 5,
          website: '',
        }
      ]
    },

    matricsReducer: {
      matrics: [
        {
          id: 1, name: 'matrics 1', status: 9, statusPercentage: 18, price: 5,
        },
        {
          id: 2, name: 'matrics 2', status: 9, statusPercentage: 18, price: 5,
        },
        {
          id: 3, name: 'matrics 3', status: 9, statusPercentage: 18, price: 5,
        },
        {
          id: 4, name: 'matrics 4', status: 9, statusPercentage: 18, price: 5,
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('is details container is visible', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>
    );

    const detailsContainer = screen.getAllByTestId("details");
    expect(detailsContainer[0]).toBeInTheDocument();
  })
})