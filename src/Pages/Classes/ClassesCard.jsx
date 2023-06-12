/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ClassesCard = ({ item }) => {


    const { image, name, price, availableSeats, instructorName, _id} = item;
    const {user, refetch} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectCard= item =>{
        if(user && user?.email){
            const orderItem = {classId: _id, image, name, price, availableSeats, instructorName, email:user?.email};
            fetch('http://localhost:5000/selectedClass',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                 },
                 body:JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Yor are selected the Class',
                        // text: 'Something went wrong!',
                        
                    });
                }
            })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
            })
        }
    }
    return (
        <div className="card mx-auto my-2 w-[90%]  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="w-720 h-52" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className='font-semibold'>
                    <p>Instructor : {instructorName}</p>
                    <p>Price : {price}</p>
                    <p>Available Seats : {availableSeats}</p>

                </div>
                <button onClick={()=> handleSelectCard(item)} className='btn btn-primary'>Select</button>

            </div>
        </div>
    );
};

export default ClassesCard;