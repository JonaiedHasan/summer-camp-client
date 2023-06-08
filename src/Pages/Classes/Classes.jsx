/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
const Classes = () => {

   
    const [allClass, setAllClass] = useState([]);
    
   
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.totalStudents - a.totalStudents);
                setAllClass(data)
            })
    }, [])
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-3xl text-center font-bold my-4'>Our Popular Classes</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
                {
                    allClass.map(item => <ClassesCard key={item.id} item={item}></ClassesCard>)
                }
            </div>

        </div>
    );
};

export default Classes;