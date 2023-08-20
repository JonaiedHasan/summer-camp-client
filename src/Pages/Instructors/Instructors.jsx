/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularInstructorCard from '../Home/PopularInstructorCard';
import useCardInstructor from '../../Hooks/useCardInstructor';
import InstructosCard from './InstructosCard';
import { Helmet } from 'react-helmet';
import { RingLoader,PropagateLoader } from 'react-spinners';

const Instructors = () => {

    const [allInstructors, loading] = useCardInstructor();
    console.log(loading);
    return (
        <div className='py-20'>
            <Helmet>
                <title>Playmakers Academy |  Instructors</title>
            </Helmet>
            <div className='mb-8'>
                <h1 className='text-4xl text-center font-bold  mb-4 text-color'>Our Popular Instructors</h1>
            </div>

            {
                loading ?  <div className='flex  flex-col justify-center py-24 items-center'>
                <RingLoader color="#333CFF" size={90} />
                <PropagateLoader className='pt-4'  color="#333CFF"/>
            </div> : 

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
                {
                    allInstructors.map(item => <InstructosCard key={item._id} item={item}></InstructosCard>)
                }
            </div>
            }
 


        </div>
    );
};

export default Instructors;