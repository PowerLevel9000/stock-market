import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const type = useSelector((store) => store.mattricsType);
  console.log(type);
  return (
    <div>
      <h1>Hello From Home</h1>
    </div>
  );
};

export default Home;
