import { screen, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home Components testing: "companies"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    matricsReducer: {
      matrics: [
        {
          id: 1, name: 'matrics 1', status: 9, statusPercentage: 18,
        },
        {
          id: 2, name: 'matrics 2', status: 9, statusPercentage: 18,
        },
        {
          id: 3, name: 'matrics 3', status: 9, statusPercentage: 18,
        },
        {
          id: 4, name: 'matrics 4', status: 9, statusPercentage: 18,
        },
      ],
    },

    imgReducer: {
      imgData: [
        '',
        '',
        '',
      ],
    },

  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
  });

  test('is no of comapines is same as matrics length', () => {
    const companiesContainers = screen.getAllByTestId('company');
    expect(companiesContainers.length).toBe(4);
  });
  test('is no of comapines is same as companies', () => {
    const NavigationLinks = screen.getAllByRole('link');
    expect(NavigationLinks.length).toBe(4);
  });
  test('is no of carousel in document', () => {
    const carouselComponent = screen.getByTestId('carousel');
    expect(carouselComponent).toBeInTheDocument();
  });
});
