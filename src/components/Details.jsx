import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyDetails } from '../redux/details/details';

const Details = () => {
  // const store = useSelector((store) => store);
  const { querry } = useSelector((store) => store.detailsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetails(querry));
  }, [dispatch, querry]);
  const a = 'ram';
  console.log(a);
  // console.log(store);
  return (
    <div>
      <h1>Hello from details</h1>
    </div>
  );
};

export default Details;
