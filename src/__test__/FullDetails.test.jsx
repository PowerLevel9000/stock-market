import { screen, render } from '@testing-library/react';
import FullDetails from '../components/FullDetails';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe("no of rows should be one more than the object", () => {
  const mockStore = configureStore([]);
  const initialState = {
    detailsReducer: {
      details: [
        { id: 1, name: 'matrics 1', status: 9, statusPercentage: 18 },
      ],
    },
  };

  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('is row is one more than data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FullDetails />
        </Provider>
      </BrowserRouter>
    );

    const rowsComponents = screen.getAllByRole("row");
    expect(rowsComponents.length).toBe(5);
  });
}
)