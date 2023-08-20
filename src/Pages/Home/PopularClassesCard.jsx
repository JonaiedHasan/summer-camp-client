/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DiCodeigniter } from "react-icons/di";
const PopularClassesCard = ({item}) => {
    const {image,name,price,availableSeats,instructorName
    } = item;
    return (
        <div className="card mx-auto my-2 w-[90%]  bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} className="w-720 h-52 hover:scale-125 transition-all duration-500" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="text-sm animate-pulse absolute top-5 right-4 text-slate-800 bg-blue-100 px-2 py-1 flex items-center gap-1 rounded-md">Popular <DiCodeigniter className='text-yellow-600'></DiCodeigniter> </div>
    </h2>
    <div className='font-semibold'>
        <p>Instructor : {instructorName}</p>
        <p>Price : $ {price}</p>
        <p>Available Seats : {availableSeats}</p>

    </div>
    <Link to="/classes" >
      
    <button className='btn btn-block btn-primary  '>Select</button>
      </Link>
   
  </div>
</div>
    );
};

export default PopularClassesCard;