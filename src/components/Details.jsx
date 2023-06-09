import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { setQuerry } from '../redux/details/details';
import { setSheetQuerry } from '../redux/blalanceSheet/blalanceSheetSlice';
import NavigationButton from './featureComponets/NavigationButton';

const Details = () => {
  const dispatch = useDispatch();
  const {
    detailsReducer: { details, isLoading }, matricsReducer: { matrics },
  } = useSelector((store) => store);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styleUp = {
    color: 'green',
  };
  const styleDwon = {
    color: 'red',
  };
  const otherCompanies = matrics.filter((company) => company.symbol !== details[0].symbol)
    .map((company) => (
      <div key={company.symbol} className="company-row">
        <span title="Company Symbol">{company.symbol}</span>
        <strong title="Company Name">{company.name.substring(0, 6)}</strong>
        <span title="Company Price">{company.price.toFixed(2)}</span>
        <span title="Company Price Change">{company.status.toFixed(2)}</span>
        {company.status < 0 ? <i title="Indicator" className="fa-solid fa-arrow-down" style={styleDwon} /> : <i title="Indicator" className="fa-solid fa-arrow-up" style={styleUp} />}
        <a href="#top">
          <button
            title="See Details"
            type="button"
            className="button"
            onClick={() => dispatch(setQuerry(company.symbol))}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                dispatch(setQuerry(company.symbol));
              }
            }}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </a>
      </div>
    ));
  return (
    <DetailWrapper>
      {isLoading ? (
        <div title="Loader" className="loader">
          <RotatingLines />
        </div>
      ) : (
        <div data-testid="details" id="top" className="focusDetails">
          <div className="logoWrap">
            <img title="Logo" src={details[0].image} alt={`${details[0].companyName}-logo`} />
          </div>
          <div className="banner">
            <div className="wrap">
              <span title="Company Symbol" className="symbol">{details[0].symbol}</span>
              <h2 title="Company Name">{details[0].companyName}</h2>
              <hr />
              <div className="price">
                <strong title="Stock Price">
                  Price : $
                  {' '}
                  {details[0].price}
                </strong>
                <span title="Stock Price Change" className="vol">
                  Change in Price : $
                  {' '}
                  {details[0].changes}
                </span>
              </div>
              <hr />
              {width < 425 ? (
                <div className="market">
                  <span title="Average Volume USD" className="vol">
                    Avg Volume :
                    {' '}
                    {details[0].volAvg}
                  </span>
                  <span title="Market Capital USD" className="vol">
                    Mkt Capital :
                    {' '}
                    {details[0].mktCap}
                  </span>
                </div>
              ) : (
                <div className="market">
                  <span title="Average Volume USD" className="vol">
                    Average Volume :
                    {' '}
                    {details[0].volAvg}
                  </span>
                  <span title="Market Capital USD" className="vol">
                    Market Capital :
                    {' '}
                    {details[0].mktCap}
                  </span>
                </div>
              )}
              <hr />
              <span title="Last Dividend Amount USD" className="vol dividend">
                Last Dividend :
                {' '}
                {details[0].lastDiv}
              </span>
              <hr />
              <a title="Company Website" href={details[0].website} target="_blank" rel="noreferrer">Company official Website</a>
              <hr />
              <div className="guide">
                <Link style={{ color: 'blue' }} title="Full Details Of Company" to="/details/full-details">
                  Full Detail
                  {' '}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link style={{ color: 'blue' }} title="Balance Sheet Of Company" onClick={() => dispatch(setSheetQuerry(details[0].symbol))} to="/details/ballance-sheet">
                  Short income-statement
                  {' '}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="nav">
        <NavigationButton />
      </div>
      <div className="other-comapanies">
        {otherCompanies}
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  .nav {
    width: 100%;
    position: absolute;
    top: -5vh;
    z-index: 3;
  }
  .focusDetails {
    margin-top: 5vh;
    width: 100%;
    display: grid;
    place-items: end;
    paddind: 1.5rem;
    .banner {
      position: absolute;
      width: 100%;
      top:0;
      background-color: rgba(234, 76, 137, 50%);
      z-index: 1;
      font-size: 1.5rem;
      backdrop-filter: blur(5px);

      a {
        cursor: pointer;
      }
      h2 {
        margin: 0.5rem 0;
      }
      .price,
      .market,
      .guide {
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        margin: 0.2;
      }
    }
    .logoWrap {
      display: grid;
      place-items: end;
      width: 100%;
      height: 52vh;
      img{
        height: 50vh;
        width: 50vh;
        overflow: hidden;
      }
    }

    @media screen and (max-width: 769px) {
      .banner {
        font-size: 1.278rem;
      }
    }

    @media screen and (max-width: 426px) {
      .banner {
        font-size: 1rem;
      }

      .logoWrap {
        height: 46vh;
        img{
          height: 45vh;
        }
      }

      .market {
        flex-direction: column;
        gap: 1px;
      }
    }

    @media screen and (max-width: 325px) {
      .logoWrap {
        height: 45vh;
        img{
          height: 200px;
          width: 200px;
        }
      }
    }

  }

  a {
    color: white;
    text-decoration: none;
  }

  .button {
    background-color: transparent;
    border-radius: 50%;
    border-color: white;
    text-align: center;
  }

  .wrap {
    padding: 1rem;
  }

  .other-comapanies {
    display: flex ;
    flex-direction: column;
    .company-row {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;

      span,
      strong,
      i {
        width: 10%;
      }

      .fa-arrow-down,
      .fa-arrow-up {
        width: 1%;
      }
    }

    .company-row:nth-of-type(even) {
      background-color: var(--darkSub)
    }

    .company-row:hover {
      color: black;
      background-color: white
    }
  }
`;

export default Details;
