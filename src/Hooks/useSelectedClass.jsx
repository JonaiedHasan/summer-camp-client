/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';

const useSelectedClass = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // console.log(user?.email);
    const { refetch, data:selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: loading,
        queryFn:async () =>{
            const res= await axiosSecure(`/selectedClass?email=${user?.email}`)
            return res.data;
        }
    })
    return [selectedClass, refetch]
    
};

export default useSelectedClass;