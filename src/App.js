import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import { getActiveCompany, getTopGainer, getTopLosser } from './redux/home/homeSlice';

function App() {
  const dispatch = useDispatch();
  const type = useSelector((store) => store.mattricsType);

  useEffect(() => {
    if (type === 'ActiveCompany') {
      dispatch(getActiveCompany());
    } else if (type === 'TopGainer') {
      dispatch(getTopGainer());
    } else if (type === 'TopLosser') {
      dispatch(getTopLosser());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
