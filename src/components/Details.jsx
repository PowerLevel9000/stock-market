import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { setQuerry } from '../redux/details/details';
import { setSheetQuerry } from '../redux/blalanceSheet/blalanceSheetSlice';

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
        <span>{company.symbol}</span>
        <strong>{company.name.substring(0, 6)}</strong>
        <span>{company.price.toFixed(2)}</span>
        <span>{company.status.toFixed(2)}</span>
        {company.status < 0 ? <i className="fa-solid fa-arrow-down" style={styleDwon} /> : <i className="fa-solid fa-arrow-up" style={styleUp} />}
        <a href="#top">
          <button
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
        <div className="loader">
          <RotatingLines />
        </div>
      ) : (
        <div id="top" className="focusDetails">
          <div className="logoWrap">
            <img src={details[0].image} alt={`${details[0].companyName}-logo`} />
          </div>
          <div className="banner">
            <div className="wrap">
              <span className="symbol">{details[0].symbol}</span>
              <h2>{details[0].companyName}</h2>
              <hr />
              <div className="price">
                <strong>
                  Price : $
                  {' '}
                  {details[0].price}
                </strong>
                <span className="vol">
                  Change in Price : $
                  {' '}
                  {details[0].changes}
                </span>
              </div>
              <hr />
              {width < 425 ? (
                <div className="market">
                  <span className="vol">
                    Avg Volume :
                    {' '}
                    {details[0].volAvg}
                  </span>
                  <span className="vol">
                    Mkt Capital :
                    {' '}
                    {details[0].mktCap}
                  </span>
                </div>
              ) : (
                <div className="market">
                  <span className="vol">
                    Average Volume :
                    {' '}
                    {details[0].volAvg}
                  </span>
                  <span className="vol">
                    Market Capital :
                    {' '}
                    {details[0].mktCap}
                  </span>
                </div>
              )}
              <hr />
              <span className="vol dividend">
                Last Dividend :
                {' '}
                {details[0].lastDiv}
              </span>
              <hr />
              <a href={details[0].website} target="_blank" rel="noreferrer">Companay official Website</a>
              <hr />
              <div className="guide">
                <Link to="/details/full-details">
                  Full Detail
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link onClick={() => dispatch(setSheetQuerry(details[0].symbol))} to="/details/ballance-sheet">
                  Short income-statement
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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
  .focusDetails {
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
        height: 49vh;
        img{
          height: 45vh;
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
