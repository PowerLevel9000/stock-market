/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuerry } from '../redux/details/details';
import { setSheetQuerry } from '../redux/blalanceSheet/blalanceSheetSlice';
import styled from 'styled-components';

const Details = () => {
  const dispatch = useDispatch();
  const {
    detailsReducer: { details }, matricsReducer: { matrics },
  } = useSelector((store) => store);
  
  const styleUp = {
    color: 'green',
  }
  const styleDwon = {
    color: 'red',
  }
  const otherCompanies = matrics.filter((company) => company.symbol !== details[0].symbol)
    .map((company) => (
      <div key={company.symbol} className="company-row">
        <span>{company.symbol}</span>
        <strong>{company.name.substring(0,6)}</strong>
        <span>{company.price.toFixed(2)}</span>
        <span>{company.status.toFixed(2)}</span>
        {company.status<0?<i className="fa-solid fa-arrow-down" style={styleDwon} />: <i className="fa-solid fa-arrow-up" style={styleUp} />}
        <i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(company.symbol))} />
      </div>
    ));
  return (
    <DetailWrapper>
      <div className="focusDetails">
        <div className="logoWrap">
          <img src={details[0].image} alt={`${details[0].companyName}-logo`} />
        </div>
        <div className="banner" >
        <span>{details[0].symbol}</span>
        <h2>{details[0].companyName}</h2>
        <strong>
          Price : $
          {' '}
          {details[0].price}
        </strong>
        <span className="vol">
          Change in Price $
          {' '}
          {details[0].changes}
        </span>
        <span className="vol">
          Average Volume
          {' '}
          {details[0].volAvg}
        </span>
        <span className="vol">
          Market Capital
          {' '}
          {details[0].mktCap}
        </span>
        <span className="vol">
          Last Dividend
          {' '}
          {details[0].lastDiv}
        </span>
        <a href={details[0].website} target="_blank" rel="noreferrer">Companay official Website</a>
        <Link to="/details/full-details">Full Detail<i className="fa-solid fa-arrow-right" /></Link>
        <Link onClick={() => dispatch(setSheetQuerry(details[0].symbol))} to="/details/ballance-sheet">Short income-statement<i className="fa-solid fa-arrow-right" /></Link>
        </div>
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
  .focusDetails {
    width: 100%;
    height: 50vh;
    display: grid;
    place-items: end;
    .banner {
      position: absolute;
      height: 50vh;
      width: 100%;
      top:0;
      background-color: rgba(234, 76, 137, 50%);
      z-index: 1;
    }
    .logoWrap {
      display: grid;
      place-items: end;
      width: 100%;
      height: 50vh;
      img{
        height: 50vh;
      }
    }

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
