/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { setQuerry } from '../redux/details/details';
import { setMatricsType } from '../redux/home/homeSlice';
import Carousel from './featureComponets/Carousel';
import bear from '../imgs/logo/bear.png';
import bull from '../imgs/logo/bull.png';
import NavigationButton from './featureComponets/NavigationButton';

const Home = () => {
  const { matricsType: type, matrics, isLoading } = useSelector((store) => store.matricsReducer);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HomeWraper>
      <NavigationButton />
      <div className="carouselWrapper">
        <Carousel />
      </div>
      <label title="Make you Choice" htmlFor="filter">
        Choose your Interest :
        {' '}
        <select title="Select Options" value={type} onChange={(e) => dispatch(setMatricsType(e.target.value))} name="filter" id="filter">
          <option title="Active Company" value="ActiveCompany">Active Companies</option>
          <option title="Losing Company" value="TopLosser">Top Losers Today</option>
          <option title="Gaining Company" value="TopGainer">Top Gainers Today</option>
        </select>
      </label>
      {isLoading ? (
        <div className="loader">
          <RotatingLines />
        </div>
      ) : (
        <div className="companies">
          {matrics.map((item, index) => {
            const arrowIconClass = item.status < 0 ? 'fa-arrow-down' : 'fa-arrow-up';
            return (
              <div data-testid = "company" className={(index % 4 === 0 || index % 4 === 3 || index === 1) ? 'company' : 'company dark'} key={item.symbol}>
                <div title="Indicator" className="indicator">
                  <i className={`fa-sharp fa-solid ${arrowIconClass}`} />
                </div>
                <div title="Indicator Logo" className="logoWraper">
                  <img src={item.status < 0 ? bear : bull} alt="" />
                </div>
                <div className="intro">
                  <div className="symbol">
                    <span title="Company Symbol">{item.symbol}</span>
                    <Link title="See Details" to="/details#top"><i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(item.symbol))} /></Link>
                  </div>
                  <h2 title="Company Name">{width > 768 ? item.name : width < 426 ? item.name.substring(0, 'ProShares UltraPro'.length) : item.name.substring(0, 'Bank of America Corporation'.length)}</h2>
                  <div className="pricing">
                    <strong title="Stock Price" className="price">
                      Price : $
                      {' '}
                      {item.price}
                    </strong>
                    <div className="status">
                      <span title="Price Change Today">
                        Price Change :
                        <span style={item.status < 0 ? { color: 'white' } : { color: 'green' }}>
                          $
                          {' '}
                          {item.status.toFixed(2)}
                        </span>
                      </span>
                      {width < 425 ? (
                        <span title="Price Change Percentage">
                          Change
                          {' '}
                          % :
                          {' '}
                          {item.statusPercentage.toFixed(2)}
                        </span>
                      ) : (
                        <span title="Price Change Percentage">
                          Price Change% :
                          {' '}
                          {item.statusPercentage.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </HomeWraper>
  );
};

const HomeWraper = styled.div`
  width: 100%;
  margin: 0;
  .carouselWrapper {
    position: relative;
  }

  .loader {
    diplay: grid;
    place-items: center;
  }

  label {
    display: block;
    background-color: var(--darkSub);
    padding: 0.3rem;
    font-size: 1.2rem;
    cursor: text;
    select {
      border-radius: 1rem;
      color: white;
      background-color: var(--darkMain);
      border-color: white;
      outline: none;
      cursor: pointer;
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
        top: 50%;
        right:30%;
      }

      .status{
        width: 100%;
        padding-right: .5rem;
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
