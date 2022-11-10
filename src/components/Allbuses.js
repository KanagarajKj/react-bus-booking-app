import React from 'react';
import { useSelector } from 'react-redux';
import BusDetails from './BusDetails';

const AllBuses = () => {
  const { busDetails } = useSelector((state) => state.bus);
  return (
    <>
      <div className="title">
        <h3>ALL BUSES</h3>
      </div>
      <BusDetails busDetails={busDetails}/>
    </>
  );
};

export default AllBuses;
