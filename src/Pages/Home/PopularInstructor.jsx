/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.totalStudents - a.totalStudents);
                setInstructor(data)
            })
    }, [])
    console.log(instructor);
    return (
        <div className='my-8'>
        <div>
            <h1 className='text-3xl text-center font-bold my-4'>Our Popular Instructors</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4'>
            {
                instructor.slice(0,6).map(item => <PopularInstructorCard key={item._id}
                item={item}></PopularInstructorCard>)
            }
        </div>

    </div>
    );
};

export default PopularInstructor;