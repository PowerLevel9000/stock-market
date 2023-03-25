import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavigationButton from './featureComponets/NavigationButton';
import TableWrap from './featureComponets/TableWrap';
import TopBanner from './featureComponets/TopBanner';

const BalanceSheet = () => {
  const regex = /\bhttps?:\/\/\S+\b/;
  const { blalanceSheet } = useSelector((store) => store.blalanceSheetReducer);
  const data = blalanceSheet.map((item) => {
    const objEntries = Object.entries(item);
    const dataSpread = objEntries.map(([key, value]) => (
      <tr key={key}>
        <td title="Parameter" style={{ width: '20px' }}>{key}</td>
        <td title="Value">{regex.test(value) ? <a href={value}>{key}</a> : value}</td>
      </tr>
    ));
    return dataSpread;
  });
  return (
    <SheetWrap>
      <NavigationButton />
      <TopBanner />
      <hr />
      <h1 title="Table Caption">BalanceSheet Format Under Construction</h1>
      <TableWrap>
        <tr>
          <th title="Column Heading">Parameter</th>
          <th title="Column Heading">Value</th>
        </tr>
        {data}
      </TableWrap>
    </SheetWrap>
  );
};

const SheetWrap = styled.div`
  h1 {
    text-align: center;
  }
`;

export default BalanceSheet;
