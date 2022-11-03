import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


const SingleBus = () => {
  const {productName} = useParams();

const busDetails = useSelector((state) => state.busDetails)

console.log(busDetails)

const findSingleBus = busDetails.find((bus) =>bus.name === productName)
  return (
    <div>SingleBus</div>
  )
}

export default SingleBus