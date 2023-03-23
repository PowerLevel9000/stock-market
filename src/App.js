import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCompanyDetails } from './redux/details/details';
import Home from './components/Home';
import Details from './components/Details';
import FullDetails from './components/FullDetails';
import BalanceSheet from './components/BalanceSheet';
// import { getActiveCompany, getTopGainer, getTopLosser } from './redux/home/homeSlice';
// import { getBlalanceSheet } from './redux/blalanceSheet/blalanceSheetSlice';

function App() {
  // const dispatch = useDispatch();
  // const { querry } = useSelector((store) => store.detailsReducer);
  // const { querry: balanceQuerry } = useSelector((store) => store.blalanceSheetReducer);

  // const type = useSelector((store) => store.matricsReducer.matricsType);
  // const store = useSelector((store) => store);
  // console.log(store);
  // useEffect(() => {
  //   if (type === 'ActiveCompany') {
  //     dispatch(getActiveCompany());
  //   } else if (type === 'TopGainer') {
  //     dispatch(getTopGainer());
  //   } else if (type === 'TopLosser') {
  //     dispatch(getTopLosser());
  //   }
  // }, [dispatch, type]);

  // useEffect(() => {
  //   dispatch(getCompanyDetails(querry));
  // }, [dispatch, querry]);
  // useEffect(() => {
  //   dispatch(getBlalanceSheet(balanceQuerry));
  // }, [dispatch, balanceQuerry]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/full-details" element={<FullDetails />} />
        <Route path="/details/ballance-sheet" element={<BalanceSheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
