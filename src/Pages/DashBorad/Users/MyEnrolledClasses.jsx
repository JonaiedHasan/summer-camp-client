/* eslint-disable no-unused-vars */
import React from 'react';
import useEnrolledClass from '../../../Hooks/useEnrolledClass';
import { Helmet } from 'react-helmet';

const MyEnrolledClasses = () => {
   const [enrolledClass, refetch] = useEnrolledClass();
  
    return (
        <div className='w-full'>
        <Helmet>
            <title>Playmakers Academy | My Selected Classes </title>
        </Helmet>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th># </th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClass.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.className}
                            </td>
                            <td>
                                {item.name}
                            </td>
                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    </div>
);
};

export default MyEnrolledClasses;