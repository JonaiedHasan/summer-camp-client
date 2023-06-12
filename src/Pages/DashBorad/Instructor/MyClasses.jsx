/* eslint-disable no-unused-vars */
import React from 'react';
import useInstructorsClass from '../../../Hooks/useInstructorsClass';

const MyClasses = () => {
   
    const  [InstructorClass, refetch] = useInstructorsClass();
    console.log(InstructorClass);

    return (

        <div className="w-full">
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th> 
                        <th>Status</th> 
                        <th>Total Enrolled Students</th>
                        <th> Feedback</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        InstructorClass.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td> 
                                <td> 
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                            </td>
                            
                           
                          
                            <td>
                                <div className='bg-blue-100 text-center p-2 rounded font-semibold'>
                                    <h4>{item.status}</h4>
                                </div>
                            </td>
                            <td>
                            <button className='btn w-[100px] p-2 bg-blue-500 text-white'>feedback</button>
                            </td>
                            <td>
                            <button className='btn w-[100px] p-2 bg-blue-500 text-white'>Update</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyClasses;