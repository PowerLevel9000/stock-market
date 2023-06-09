import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TopBanner = () => {
  const {
    details,
  } = useSelector((store) => store.detailsReducer);
  return (
    <TopWrap className="top">
      <div className="banner">
        <div className="logoWrap">
          <img title="Company Logo" src={details[0].image} alt="Company-Logo" />
        </div>
        <div className="banner-details">
          <h2 title="Company Name">{details[0].companyName}</h2>
        </div>
      </div>
      <div className="info">
        <h2 title="Company Symbol" className="symbol">{details[0].symbol}</h2>
        <strong title="Stock Price" className="price">
          Price : $
          {' '}
          {details[0].price}
        </strong>
        <div className="intro">
          <span title="Ceo Of The Company" className="ceo">
            CEO
            {'   :   '}
            {details[0].ceo}
          </span>
          <span title="Company Address" className="country">
            Company belongs to
            {' —: '}
            {details[0].country}
            {' '}
            {details[0].city}
          </span>
        </div>
      </div>
    </TopWrap>
  );
};

const TopWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;

  .banner {
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-right: 1px solid white;
    padding-right: 1rem;
  }

  .logoWrap{
    width: 100%;
    max-width: 640px;
  }

  img {
    width: 400px;
  }
  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 3.5rem;
    gap 1rem;
    h2 {
      margin: 0;
    }

    .intro {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .price {
    color: green;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    .info {
      font-size: 1rem;
    }
    img {
      height:100px;
      width:100px;
    }
  }
`;

export default TopBanner;
