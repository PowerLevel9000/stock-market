import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import { getActiveCompany, getTopGainer, getTopLosser } from './redux/home/homeSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCompany());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTopGainer());
  }, [dispatch, 'TopGainer']);

  useEffect(() => {
    dispatch(getTopLosser());
  }, [dispatch, 'TopLosser']);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
