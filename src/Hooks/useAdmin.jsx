/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;