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
          <img src={details[0].image} alt="Company-Logo" />
        </div>
        <div className="banner-details">
          <h2>{details[0].companyName}</h2>
        </div>
      </div>
      <div className="info">
        <h2 className="symbol">{details[0].symbol}</h2>
        <strong className="price">
          Price : $
          {' '}
          {details[0].price}
        </strong>
        <div className="intro">
          <span className="ceo">
            CEO
            {'   :   '}
            {details[0].ceo}
          </span>
          <span className="country">
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
    width: 200px;
    height: 200px;
  }
  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
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
    img {
      height:100px;
      width:100px;
    }
  }
`;

export default TopBanner;
