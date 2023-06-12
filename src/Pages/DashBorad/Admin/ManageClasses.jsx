/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UseClass from '../../../Hooks/UseClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const[allClasses,,refetch] = UseClass();
    console.log(allClasses);
    const [btnDisabled, setBtnDisabled] = useState({})

     const handleApprove = item =>{
        console.log(item);
        fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} is a Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // setBtnDisabled(true)
                    setBtnDisabled((prevState) => ({
                        ...prevState,
                        [item._id]: true,
                      }));
                }
            })
     }
     const handleDeny = item =>{
        console.log(item);
        fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: `${item.name} is a Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // setBtnDisabled(true)
                    setBtnDisabled((prevState) => ({
                        ...prevState,
                        [item._id]: true,
                      }));
                }
            })
     }

    return (
         <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th> 
                            <th>Instructor</th> 
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((item, index) => <tr key={item._id}>
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
                                    <div className='font-semibold'>
                                        <p>Name: {item.instructorName}</p>
                                        <p className='font-medium'>Email: {item.email}</p>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    {item.availableSeats
}
                                </td>
                                <td className="text-center">${item.price}</td>
                                <td>
                                    <div className='bg-blue-100 text-center p-2 rounded font-semibold'>
                                        <h4>{item.status}</h4>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <div className='flex flex-col '>
                                    <button  disabled={btnDisabled[item._id]}    onClick={()=>{handleApprove(item)}} className='btn w-[100px] p-2 bg-blue-500 text-white'>Approve</button>
                                    <button   disabled={btnDisabled[item._id]} onClick={()=>{handleDeny(item)}} className='btn w-[100px] p-2 bg-blue-500 text-white'>deny</button>
                                    <button className='btn w-[100px] p-2 bg-blue-500 text-white'>feedback</button>
                                    
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    
    );
};

export default ManageClasses;