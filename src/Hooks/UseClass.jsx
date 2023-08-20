/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseClass = () => {
    const { data: allClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-school-server-gamma.vercel.app/classes')
            return res.json()
        }
    })

    return [allClasses, loading, refetch]
};

export default UseClass;