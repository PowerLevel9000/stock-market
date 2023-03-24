import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FullDetails = () => {
  const {
    details,
  } = useSelector((store) => store.detailsReducer);

  const regex = /\bhttps?:\/\/\S+\b/;
  const getValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? 'True' : 'Not available';
    }
    return value;
  };

  const objEntries = Object.entries(details[0]);

  const detailsRow = objEntries.map(([key, value]) => (
    <tr key={key}>
      <td>{key}</td>
      <td>{regex.test(getValue(value)) ? <a href={getValue(value)}>{key}</a> : getValue(value)}</td>
    </tr>
  ));

  return (
    <FullDetailsWrap>
      <div className="top">
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
      </div>

      <hr />
      <table className="full details">
        <tr>
          <th>Parameter</th>
          <th>Vlaue</th>
        </tr>
        {detailsRow}
      </table>
    </FullDetailsWrap>
  );
};

const FullDetailsWrap = styled.div`
  @keyframes overflow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .top {
    display: flex;
    gap: 1rem;
    padding: 1rem;

    .banner {
      width: 50%;
      border-right: 1px solid white;
      padding-right: 1rem;
    }
    
    .logoWrap{
      width: 100%;
      max-width: 640px;
    }

    img {
      width: 100%;
      position: relative;
      overflow: hidden;
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
  }
`;

export default FullDetails;
