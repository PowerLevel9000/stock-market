import React from 'react';
import { useSelector } from 'react-redux';

const BalanceSheet = () => {
  const { blalanceSheet } = useSelector((store) => store.blalanceSheetReducer);
  const data = blalanceSheet.map((item) => {
    const objEntries = Object.entries(item);
    const dataSpread = objEntries.map(([key, value]) => (
      <div key={key}>
        <p>
          {key}
          {' '}
          <span>{value}</span>
        </p>
      </div>
    ));
    return dataSpread;
  });
  return (
    <div>
      <h1>Hello from BalanceSheet</h1>
      <h4>Under Construction</h4>
      <div>
        {data}
      </div>
    </div>
  );
};

export default BalanceSheet;
