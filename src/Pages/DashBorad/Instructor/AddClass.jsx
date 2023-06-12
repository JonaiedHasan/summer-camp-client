// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
const img_hosting_token = import.meta.env. VITE_Image_Upload_Token;

const AddClass = () => {
    const {user} = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

 console.log(user.email);
    const onSubmit = data => {
    
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, 
                    instructorName, 
                    availableSeats,email} = data;
                const newItem = {name, price: parseFloat(price), 
                    instructorName, 
                    availableSeats,email, image:imgURL,status:'Pending'};
                console.log(newItem);
                axiosSecure.post('/classes', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    return (
        <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-3/4 mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text"   defaultValue={user.displayName} 
                        {...register("instructorName",{ required: true})}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-3/4 mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="text" placeholder="Instructor Email"
                    defaultValue={user.email} 
                        {...register("email", { required: true})}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder="Available seat" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control mx-auto w-1/2 my-4">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;
