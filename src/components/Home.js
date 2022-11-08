import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateLocation } from '../redux/slice/cartSlice';
const Home = () => {
  const [location, setLocation] = useState({
    pickUpPoint: '',
    droppingPoint: '',
    date: '',
  });

const dispatch = useDispatch();
const navigate = useNavigate();

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLocation({ ...location, [name]: value });
  };

  // Show Error Message
//   const showError = function (input, message) {
//     let formControl = input.parentElement;
//     formControl.querySelectorAll = 'form_control error';
//     let span = formControl.querySelector('span');
//     span.innerText = message;
//   };

  // const error = document.querySelectorAll('error')

  const submitHandler = (e) => {
    e.preventDefault();

    if (!location.pickUpPoint) {
    //   showError(location.pickUpPoint, 'Enter Pickup Point');
    // error.textContent = 'Enter Pickup Point';

    console.log('Error')
    } else if (!location.droppingPoint) {
    //   showError(location.droppingPoint, 'Enter Dropping Point');
        // error.textContent = 'Enter Pickup Point';
        
    console.log('Error');

    } else if (!location.date) {
    //   showError(location.date, 'Enter date');
        // error.textContent = 'Enter Pickup Point';
        
    console.log('Error');
    } else {
      console.log(location);
      dispatch(updateLocation(location));
      navigate('./allBuses');
    }
};

  return (
    <main className="home-page">
      <div className="home-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-l-P54rj7wfQ88_HdTCV3zlf-U_9QQejhcA&usqp=CAU"
          alt="bus-icon"
        />
      </div>
      <div className="get-location">
        <form action="#" className="form" onSubmit={submitHandler}>
          <div className="form-control">
            {/* <label htmlFor="from">From</label> */}
            {/* <input
              type="text"
              placeholder="Pick Up Point"
              id="from"
              name="pickUpPoint"
              value={location.pickUpPoint}
              onChange={handelChange}
            /> */}

            <select
              id="select_page"
              className="operator"
              value={location.pickUpPoint}
              onChange={handelChange}
              name="pickUpPoint"
            >
              <option value="">Pick Up Point</option>
              <option value="chennai">chennai</option>
              <option value="Kerala">Kerala</option>
              <option value="coimbatore">coimbatore</option>
              <option value="kumuli">kumuli</option>
              <option value="Theni">Theni</option>
              <option value="Salem">Salem</option>
            </select>
            <span className="error"></span>
          </div>
          <div className="form-control">
            {/* <label htmlFor="to">To</label> */}
            <select
              id="select_page"
              className="operator"
              value={location.droppingPoint}
              onChange={handelChange}
              name="droppingPoint"
            >
              <option value="">Dropping Point</option>
              <option value="bangalore">bangalore</option>
              <option value="chennai">chennai</option>
              <option value="kumuli">kumuli</option>
              <option value="coimbatore">coimbatore</option>
              <option value="Kerala">Kerala</option>
            </select>
            <span className="error"></span>
          </div>
          <div className="form-control">
            {/* <label htmlFor="date">Onward Date</label> */}
            <input
              type="date"
              placeholder="Date"
              id="date"
              name="date"
              value={location.date}
              onChange={handelChange}
            />
            <span className="error"></span>
          </div>
          <button type="submit" className="home-btn">
            Search Buses
          </button>
        </form>
      </div>
    </main>
  );
};

export default Home;
