/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularInstructorCard from '../Home/PopularInstructorCard';
import useCardInstructor from '../../Hooks/useCardInstructor';
import InstructosCard from './InstructosCard';

const Instructors = () => {
 
    const [allInstructors] = useCardInstructor();
    
    
    return (
        <div>
              <div className='my-8'>
        <div className='mb-8'>
            <h1 className='text-4xl text-center font-bold mb-4 text-color'>Our Popular Instructors</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
            {
                allInstructors.map(item => <InstructosCard key={item._id} item={item}></InstructosCard>)
            }
        </div>

    </div>
        </div>
    );
};

export default Instructors;