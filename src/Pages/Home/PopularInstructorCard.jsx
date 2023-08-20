/* eslint-disable no-unused-vars */
import React from 'react';
import { SlBadge } from "react-icons/sl";
const PopularInstructorCard = ({item}) => {
    const {name,image,email,classesTaken,totalStudents} = item;
    return (
        <div className="card mx-auto my-2 w-[90%]  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Instructors" className="w-720 h-52 hover:scale-125 transition-all duration-500" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
          <div className="text-sm absolute  right-4 bg-blue-100 text-slate-800 px-2 py-1 rounded-md flex items-center" >Top  <SlBadge className='text-yellow-600 text-lg ps-1 animate-pulse'></SlBadge> </div>
          </h2>
          <div className='font-semibold'>
            <p>Email: {email}</p>
              <p>Total Class: {classesTaken}</p>
              <p>Total Students: {totalStudents}</p>
            
      
          </div>
       
         
        </div>
      </div>
    );
};

export default PopularInstructorCard;