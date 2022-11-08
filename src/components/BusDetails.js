// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { busSelection } from '../redux/slice/serviceAction';

// const BusDetails = () => {
//   const [data, setData] = useState([]);
//   // const bus = useSelector((state) => state.bus.BusDetails)

//   console.log(data);

//   const dispatch = useDispatch();
//   const fetchData = async () => {
//     const url = 'https://swapi.dev/api/vehicles/';
//     const response = await axios.get(url).catch((err) => {
//       console.log('Error:', err);
//     });

//     console.log(response.data.results);
//     setData(response.data.results);
//     dispatch(busSelection(data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => {
//         const { name, modal, passengers, url } = item;
//         return (
//           <section>
//             <h3>{name}</h3>
//             <h4>{modal}</h4>
//             <p>Available Seats: {passengers}</p>
//             <button>Book Seats</button>
//           </section>
//         );
//       })}
//     </div>
//   );
// };

// export default BusDetails;


import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BusDetails = ({busDetails}) => {
  return (
    <div className="section-center">
      {busDetails.map((product) => {
        const { id, title, image, price, quantity, from, to } = product;
        return (
          <article key={id} className="card-one">
            <div className="img-cta">
              <img src={image} alt={title} />
            </div>
            <div className="info">
              <h4>{title}</h4>
              <p>
                {from} <FaArrowRight /> {to}
              </p>
              <h3>₹ {price}-/</h3>
              <h3>Available Seats {quantity}</h3>
            </div>
            {/* <button
             className="add-to-cart"
             onClick={() =>
              dispatch(
                addItem({
                  id,
                  title,
                  price,
                  quantity,
                })
                )
              }
              >
              Add to Cart
            </button> */}

            <button className='view-seats-btn'>
              <Link className="more-info" to={`/busDetails/${id}`}>
                view seats{' '}
              </Link>
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default BusDetails