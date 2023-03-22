import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMatricsType } from '../redux/home/homeSlice';

const Home = () => {
  const type = useSelector((store) => store.matricsType);
  const dispatch = useDispatch();
  console.log(type);
  return (
    <div>
      <label htmlFor="filter">
        Choose a car:
        <select value={type} onChange={(e) => dispatch(setMatricsType(e.target.value))} name="filter" id="filter">
          <option value="ActiveCompany">Active Companines</option>
          <option value="TopLosser">Top Lossers Today</option>
          <option value="TopLosser">Top Gainers Today</option>
        </select>
      </label>
      <h1>Hello From Home</h1>
    </div>
  );
};

export default Home;
