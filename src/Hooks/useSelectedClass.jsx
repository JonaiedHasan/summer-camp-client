/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user?.email);
    const { refetch, data:selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: loading,
        queryFn:async () =>{
            const res= await fetch(`http://localhost:5000/selectedClass?email=${user?.email}`)
            return res.json();
        }
    })
    return [selectedClass, refetch]
    
};

export default useSelectedClass;