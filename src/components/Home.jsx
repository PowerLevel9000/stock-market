import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <div>
      <h1>Hello From Home</h1>
    </div>
  );
};

export default Home;
