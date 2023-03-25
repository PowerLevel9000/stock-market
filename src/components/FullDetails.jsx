import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavigationButton from './featureComponets/NavigationButton';
import TableWrap from './featureComponets/TableWrap';
import TopBanner from './featureComponets/TopBanner';

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
      <td title="Parameter">{key}</td>
      <td title="value">{regex.test(getValue(value)) ? <a href={getValue(value)}>{key}</a> : getValue(value)}</td>
    </tr>
  ));

  return (
    <FullDetailsWrap>
      <NavigationButton />
      <TopBanner />
      <hr />
      <h2 title="Table Header">Company&apos;s Full Details</h2>
      <TableWrap className="full details">
        <tr>
          <th title="Column Heading">Parameter</th>
          <th title="Column Heading">Value</th>
        </tr>
        {detailsRow}
      </TableWrap>
    </FullDetailsWrap>
  );
};

const FullDetailsWrap = styled.div`
  h2 {
    text-align: center;
  } 
`;

export default FullDetails;
