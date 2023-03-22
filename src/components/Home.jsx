import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMatricsType } from '../redux/home/homeSlice';
import Carousel from './featureComponets/Carousel';

const Home = () => {
  const type = useSelector((store) => store.matricsReducer.matricsType);
  console.log(type);
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
      <h1>Hello From Home</h1>
    </div>
  );
};

export default Home;
