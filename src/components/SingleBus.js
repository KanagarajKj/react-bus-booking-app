import React from 'react'
import { useParams } from 'react-router-dom'
import busData from '../busData';
import { FaArrowRight } from 'react-icons/fa';

const SingleBus = () => {
    const {busID} = useParams();
console.log(busData)
const single = busData.find((bus) => bus.id === busID)
console.log(single)

const { id, title, image, price, quantity, from, to } = single;

  return (
    <section className="single-bus">
      <div className="single-bus-img-cta">
        <img src={single.image} alt={title} />
      </div>
      <div className="bus-details">
        <h1>{title}</h1>
        <h3 className="location">
          {from} <FaArrowRight /> {to}
        </h3>
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
      </div>
    </section>
  );
}

export default SingleBus