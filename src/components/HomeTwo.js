import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Allbuses from './Allbuses';

const HomeTwo = () => {
  const [availableBus, setAvailableBus] = useState(null);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = 'https://swapi.dev/api/vehicles/';

    try {
      const data = await axios
        .get(url)
        .then((response) => response.data.results);
      setAvailableBus(data);
      dispatch();
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  if (!availableBus) {
    <div>
      <h1>Loading...</h1>
    </div>;
    return;
  }

  return (
    <>
      <div className="all-buses">
        <h3>All Buses</h3>
      </div>
      <section>
        <Allbuses availableBus={availableBus} />
      </section>
    </>
  );
};

export default HomeTwo;
