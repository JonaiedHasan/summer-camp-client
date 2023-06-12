/* eslint-disable no-unused-vars */
import React from 'react';

const InstructosCard = ({item}) => {
    
    const {name,image,email,classesTaken,totalStudents} = item;
    return (
        <div className="card mx-auto  w-[90%]  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className="w-720 h-52" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
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

export default InstructosCard;