/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyDetails, setQuerry } from '../redux/details/details';
import { setMatricsType } from '../redux/home/homeSlice';
import Carousel from './featureComponets/Carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bear from '../imgs/logo/bear.png'
import bull from '../imgs/logo/bull.png'

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
      <div className="companies">
        {matrics.map((item, index) => (
          <div className={(index % 4 === 0 || index % 4 === 3 || index === 1) ? 'company' : 'company dark'} key={item.symbol}>
            <div className="logoWraper">
              <img src={item.status < 0 ? bear : bull} alt="" />
            </div>
            <div className="intro">
              <span>{item.symbol}</span>
              <h2>{item.name}</h2>
              <div className="pricing">
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
              </div>
              <Link to="/details" ><i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(item.symbol))} /></Link>
            </div>
          </div>
        ))}
      </div>
    </HomeWraper>
  );
};

const HomeWraper = styled.div`
  margin: 0;
  padding: 0;
  .carouselWrapper {
    position: relative;
  }
  label {
    display: block;
    background-color: var(--darkSub);
    padding: 0.3rem;
    font-size: 1.2rem;
    select {
      border-radius: 1rem;
      color: white;
      background-color: var(--darkMain);
      border-color: white;
      outline: none;
    }
  }

  .companies {
    display: flex;
    flex-wrap: wrap;
  }
  .company {
    width: 50%;
    display: flex;
    justify-content: space-around;
    box-shadow:
      0px 0px 1px rgba(234, 76, 137, 0.144),
      0px 0px 1px rgba(234, 76, 137, 0.64)
    ;

    img {
      width: 100%;
    }
    
    .logoWraper {
      width: 30%;
    }
    .intro {
      width: 70%;
    }
  }

  .company:nth-of-type(2){
    background-color: var(--darkMain);
  }

  .dark {
    background-color: var(--darkMain);
  }
`;

export default Home;
