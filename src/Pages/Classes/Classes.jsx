/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import UseClass from '../../Hooks/UseClass';
import { RingLoader,PropagateLoader } from 'react-spinners';
const Classes = () => {

   
    const[allClasses , loading] = UseClass();
   
    return (
        <div className='pt-24 mb-8'>
            <div className='mb-8'>
                <h1 className='text-4xl text-center font-bold text-color mb-4'>Our Popular Classes</h1>
            </div>

            {
                loading ?  <div className='flex  flex-col justify-center py-24 items-center'>
                <RingLoader color="#333CFF" size={90} />
                <PropagateLoader className='pt-4'  color="#333CFF"/>
            </div> : 

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
                {
                    allClasses.map(item => <ClassesCard key={item.id} item={item}></ClassesCard>)
                }
            </div>
            }


        </div>
    );
};

export default Classes;