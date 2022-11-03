import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {userSearchedLocation} from '../redux/slice/cartSlice'


const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    pickUpPoint: '',
    droppingPoint: '',
    date: '',
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(!search.pickUpPoint){
        alert('Enter Pick Up point location');
    }else if (!search.droppingPoint) {
      alert('Enter Dropping point location');
    } else if (!search.date) {
      alert('Enter Date');
    }else {
      setSearch(dispatch(userSearchedLocation(search)));
        navigate('/hometwo')
    }
  };
  return (
    <>
      <div className="title">
        <h3>Bus Booking App</h3>
      </div>
      <Form className="search-form" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="text"  
            placeholder="From"
            name="pickUpPoint"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <Form.Control
            type="text"
            placeholder="To"
            name="droppingPoint"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>OnWard Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="ONWARD DATE"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default Home;
