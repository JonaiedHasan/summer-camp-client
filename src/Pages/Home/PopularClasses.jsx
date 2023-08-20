/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {

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
                <h1 className='text-5xl text-center font-bold text-color my-10 py-2'>Our Popular Classes</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
                {
                    allClass.slice(0,6).map(item => <PopularClassesCard key={item.id} item={item}></PopularClassesCard>)
                }
            </div>

        </div>
    );
};

export default PopularClasses;