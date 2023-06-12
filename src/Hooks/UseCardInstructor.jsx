/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCardInstructor = () => {
   
        const { data: allInstructors = [], isLoading: loading,refetch } = useQuery({
            queryKey: ['instructors'],
            queryFn: async () => {
                const res = await fetch('http://localhost:5000/instructors')
                return res.json()
            }
        })
    
        return [allInstructors, loading,refetch]
    
};

export default useCardInstructor;