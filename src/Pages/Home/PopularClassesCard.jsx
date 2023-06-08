/* eslint-disable no-unused-vars */
import React from 'react';

const PopularClassesCard = ({item}) => {
    const {image,name,price,availableSeats,instructorName
    } = item;
    return (
        <div className="card mx-auto  w-[90%]  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" className="w-720 h-52" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <div className='font-semibold'>
        <p>Instructor : {instructorName}</p>
        <p>Price : {price}</p>
        <p>Available Seats : {availableSeats}</p>

    </div>
    <button className='btn'>Select</button>
   
  </div>
</div>
    );
};

export default PopularClassesCard;