/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    // const { user } = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    // const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    //     queryKey: ['isAdmin', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
    //         console.log('is admin response', res)
    //         console.log(res.data);
    //         return res.data.admin;
    //     }
    // })
    // return [isInstructor, isInstructorLoading]

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isInstructor, isAdminLoading]

};

export default useInstructor;