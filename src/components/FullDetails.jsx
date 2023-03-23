import React from 'react';
import { useSelector } from 'react-redux';

const FullDetails = () => {
  const {
    details,
  } = useSelector((store) => store.detailsReducer);

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
      <td>{getValue(value)}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Hello from Full Details</h1>
      <div className="banner">
        <div className="logoWrap">
          <img src={details[0].image} alt="Company-Logo" />
        </div>
        <div className="banner-details">
          <h2>{details[0].companyName}</h2>
        </div>
      </div>
      <p>{details[0].symbol}</p>
      <strong>
        Price : $
        {' '}
        {details[0].price}
      </strong>
      <div className="intro">
        <span>
          CEO
          {' '}
          {details[0].ceo}
        </span>
        <span>
          Company belongs to
          {' '}
          {details[0].country}
          {' '}
          {details[0].city}
        </span>
      </div>
      <hr />
      <table className="full details">
        <tr>
          <th>Parameter</th>
          <th>Vlaue</th>
        </tr>
        {detailsRow}
      </table>
    </div>
  );
};

export default FullDetails;
