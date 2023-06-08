/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseClass = () => {
    const { data: allClasses = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
    })

    return [allClasses, loading]
};

export default UseClass;