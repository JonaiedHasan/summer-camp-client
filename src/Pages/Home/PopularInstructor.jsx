/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';
import { RingLoader,PropagateLoader } from 'react-spinners';

const PopularInstructor = () => {
    const [isLoading, setLoading] = useState(true)
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-gamma.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.totalStudents - a.totalStudents);
                setInstructor(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='my-10'>
            <div>
                <h1 className='text-5xl my-10 text-center font-bold text-color'>Our Popular Instructors</h1>
            </div>
            {
                isLoading ? <div className='flex  flex-col justify-center py-24 items-center'>
                    <RingLoader color="#333CFF" size={90} />
                    <PropagateLoader className='pt-4'  color="#333CFF"/>
                </div>
                    :
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 mx-4 mt-8'>
                        {
                            instructor.slice(0, 6).map(item => <PopularInstructorCard key={item._id}
                                item={item}></PopularInstructorCard>)
                        }
                    </div>
            }

        </div>
    );
};

export default PopularInstructor;