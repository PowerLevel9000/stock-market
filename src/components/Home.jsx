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
import { RotatingLines } from 'react-loader-spinner';

const Home = () => {
  const { matricsType: type, matrics, isLoading } = useSelector((store) => store.matricsReducer);
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
      {isLoading ? <RotatingLines
        strokeColor="pink"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
      /> : <div className="companies">
        {matrics.map((item, index) => (
          <div className={(index % 4 === 0 || index % 4 === 3 || index === 1) ? 'company' : 'company dark'} key={item.symbol}>
            <div className="indicator">
              {item.status < 0 ? <i class="fa-sharp fa-solid fa-arrow-down "></i> : <i class="fa-sharp fa-solid fa-arrow-up "></i>}
            </div>
            <div className="logoWraper">
              <img src={item.status < 0 ? bear : bull} alt="" />
            </div>
            <div className="intro">
              <div className="symbol">
                <span>{item.symbol}</span>
                <Link to="/details" ><i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(item.symbol))} /></Link>
              </div>
              <h2>{item.name}</h2>
              <div className="pricing">
                <strong className="price">
                  Price : $
                  {' '}
                  {item.price}
                </strong>
                <div className="status">
                  <span>
                    Price Change : $
                    <span style={item.status < 0 ? { color: 'white', } : { color: 'green' }}>
                      {' '}
                      {item.status}
                    </span>
                  </span>
                  <span>
                    Price Change% :
                    {' '}
                    {item.statusPercentage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>}
    </HomeWraper>
  );
};

const HomeWraper = styled.div`
  margin: 0;
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
    position: relative;
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
      padding: 1rem; {
      .symbol {
        display: flex;
        justify-content: space-between;
        i {
          font-size: 1.5rem;
          border: 1px solid white;
          padding: 0.5rem;
          border-radius: 50%;
          color: white;
        }
      }
      }

      h2 {
        margin: 0.5rem 0;
      }

      .price {
        font-size: 1.2rem;
        color: green;
      }

      .status {
        width: 70%;
        display: flex;
        justify-content: space-between;
      }
    }

    .indicator {
      position:absolute;
      right: 10%;
      top: 50%;
      font-size: 2rem;

      .fa-arrow-down {
        color: red;
      }
      .fa-arrow-up {
        color: green;
      }
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      flex-direction: column;
      .intro {
        padding: 0.5rem 0 0.5rem 0.5rem;
      }
      .logoWraper {
        width:100%;
        height: 80%;
        padding: 0.1rem 0;
        display: grid;
        place-items: center;
        img {
          width: 80%;
          height: 80%;
        }
      }

      .intro {
        width: 100%;
        font-size: 1.1rem;
        h2 {
          margin: 0.2rem 0;
        }
      }

      .symbol {
        align-items: center;
        padding-right: 1rem;
      }

      .pricing {
        width: 100%;

        .status {
          width: 95%;
        }
      }

      .indicator {
        right: 30%;
        top: 67%;
      }
      
    }

    @media screen and (max-width: 426px) {
      .intro {
        font-size: .8rem;
        h2 {
          font-size: 1rem;
        }
      }

      .indicator{
        top: 60%;
        right:30%;
      }
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
