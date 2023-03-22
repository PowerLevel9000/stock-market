import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMatricsType } from '../redux/home/homeSlice';
import Carousel from './featureComponets/Carousel';

const Home = () => {
  const { matricsType: type, matrics } = useSelector((store) => store.matricsReducer);
  console.log(matrics);
  const dispatch = useDispatch();
  return (
    <div>
      <Carousel />
      <label htmlFor="filter">
        Choose a car:
        <select value={type} onChange={(e) => dispatch(setMatricsType(e.target.value))} name="filter" id="filter">
          <option value="ActiveCompany">Active Companines</option>
          <option value="TopLosser">Top Lossers Today</option>
          <option value="TopGainer">Top Gainers Today</option>
        </select>
      </label>

      {matrics.map((item) => (
        <div key={item.symbol}>
          <span>{item.symbol}</span>
          <h2>{item.name}</h2>
          <strong>
            Price : $
            {item.price}
          </strong>
          <span>
            Price Change : $
            {item.status}
          </span>
          <span>
            Price Change : %
            {item.statusPercentage}
          </span>
          <i className="fa-solid fa-arrow-right" />
        </div>
      ))}
    </div>
  );
};

export default Home;
