/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuerry } from '../redux/details/details';

const Details = () => {
  const dispatch = useDispatch();
  const {
    detailsReducer: { details }, matricsReducer: { matrics },
  } = useSelector((store) => store);

  const otherCompanies = matrics.filter((company) => company.symbol !== details[0].symbol)
    .map((company) => (
      <div key={company.symbol} className="company-row">
        <span>{company.symbol}</span>
        <strong>{company.name}</strong>
        <span>{company.price}</span>
        <span>{company.status}</span>
        <i className="fa-solid fa-arrow-right" onClick={() => dispatch(setQuerry(company.symbol))} />
      </div>
    ));
  return (
    <div>
      <div className="focusDetails">
        <div className="logoWrap">
          <img src={details[0].image} alt={`${details[0].companyName}-logo`} />
        </div>
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
      </div>
      <div className="other-comapanies">
        {otherCompanies}
      </div>
    </div>
  );
};

export default Details;
