/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyDetails, setQuerry } from '../redux/details/details';
import { setMatricsType } from '../redux/home/homeSlice';
import Carousel from './featureComponets/Carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const { matricsType: type, matrics } = useSelector((store) => store.matricsReducer);
  const dispatch = useDispatch();
  return (
    <HomeWraper>
      <div className="carouselWrapper">
        <Carousel />
      </div>
      <label htmlFor="filter">
        Choose a Intrest :
        {' '}
        <select value={type} onChange={(e) => dispatch(setMatricsType(e.target.value))} name="filter" id="filter">
          <option value="ActiveCompany">Active Companines</option>
          <option value="TopLosser">Top Lossers Today</option>
          <option value="TopGainer">Top Gainers Today</option>
        </select>
      </label>

      {matrics.map((item) => (
        <div className="Company" key={item.symbol}>
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
          <Link to="/details" ><i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(item.symbol))} /></Link>
        </div>
      ))}
    </HomeWraper>
  );
};

const HomeWraper = styled.div`
  margin: 0;
  padding: 0;
  .carouselWrapper {
    position: relative;
  }
`;

export default Home;
