/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorsClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // console.log(user?.email);
    const { refetch, data: InstructorClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        enabled: loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructorClass?email=${user?.email}`)
            return res.data;
        }
    })
    return [InstructorClass, refetch]

};

export default useInstructorsClass;