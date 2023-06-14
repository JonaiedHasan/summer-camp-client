/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import { Helmet } from 'react-helmet';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import PaymentModal from './PaymentModal';

const MySelectedClass = () => {
    let [modal, setModal] = useState(false);
     const [itemToPay, setItemToPay] = useState(null)
    const [selectedClass, refetch] = useSelectedClass();
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0)
    const closeModal = () => {
        setModal(false)
    }
    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount
                            > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    const handleOpenModal= item =>{
        setItemToPay(item)
        setModal(true)
        
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Sports || My Selected Class</title>
            </Helmet>
            <div className='text-5xl my-8 font-semibold text-color  flex justify-evenly items-center'>
                <h3 className='text-3xl'>My Selected Classes</h3>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) => <tr key={item._id}>
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
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    <button onClick={() => handleOpenModal(item)} className='btn bg-blue-300 btn-sm'>Pay</button>
                                </td>
                                <td>
                                    <button onClick={() => { handleDelete(item) }} className="btn btn-ghost btn-xl"><FaTrashAlt></FaTrashAlt></button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                    <PaymentModal isOpen={modal} closeModal={closeModal} item={itemToPay} />
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;