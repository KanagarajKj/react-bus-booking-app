import React from 'react';
import { useParams } from 'react-router-dom';
import busData from '../busData';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleBus = () => {
  const { busID } = useParams();

  const single = busData.find((bus) => bus.id === busID);

  const { title, image, price, from, to, deptTime, arrivalTime } = single;

  return (
    <section className="single-bus">
      <div className="single-bus-img-cta">
        <img src={image} alt={title} />
      </div>
      <div className="bus-details">
        <h1>{title}</h1>
        <h3 className="location">
          {from} <FaArrowRight /> {to}
        </h3>
        <h3>PRICE: ₹ {price}-/</h3>
        <span className="time">
          <p>
            Dept Time: <span>{deptTime} PM</span>
          </p>
          <p>
            Arrival Time: <span>{arrivalTime} AM</span>
          </p>
        </span>
      </div>
      <div className="available-seats">
        <div className="seats">
          <div className="select-seat">
            <label htmlFor="seat-one">1A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">2A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">3A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">4A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">5A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">6A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">7A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">8A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">9A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">10A</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
        </div>
        <div className="seats">
          <div className="select-seat">
            <label htmlFor="seat-one">1B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">2B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">3B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">4B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">5B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">6B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">7B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">8B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">9B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">10B</label>
            <input type="checkbox" className="checkbox" id="seat-one" />
          </div>
        </div>
      </div>

      <button className="get-passenger-details">
        <Link className="get-passenger-details-link" to="/passengerDetails">
          Book
        </Link>
      </button>
    </section>
  );
};

export default SingleBus;
