import React from 'react'

const PassengerDetails = () => {
  return (
    <div className="passenger-form">
      <div className="passenger-form-title">
        <h3>Passenger Details</h3>
      </div>
      <form action="#">
        <div className="form-control">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            id="fullName"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email Id"
            name="email"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            name="number"
            id="number"
          />
        </div>
        <div className="form-control">
          <h3>Gender</h3>
          <span className="gender">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </span>
          <span className="gender">
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <div className="passenger-btn">
          <button type="submit" className="passenger-booking-btn">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default PassengerDetails