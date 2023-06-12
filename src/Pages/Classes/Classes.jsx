/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import UseClass from '../../Hooks/UseClass';
const Classes = () => {

   
    const[allClasses] = UseClass();
   
    return (
        <div className='my-8'>
            <div className='mb-8'>
                <h1 className='text-4xl text-center font-bold text-color my-4'>Our Popular Classes</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
                {
                    allClasses.map(item => <ClassesCard key={item.id} item={item}></ClassesCard>)
                }
            </div>

        </div>
    );
};

export default Classes;