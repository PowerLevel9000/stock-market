import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
// import { getActiveCompany, getTopGainer, getTopLosser } from './redux/home/homeSlice';

function App() {
  // const dispatch = useDispatch();
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      {/* <Home />
      <Details /> */}
    </BrowserRouter>
  );
}

export default App;
