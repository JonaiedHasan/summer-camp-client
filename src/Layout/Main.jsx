/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react';
import { useEffect } from 'react';
import { PulseLoader} from 'react-spinners';
const Main = () => {
    const queryClient = new QueryClient()

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login' || 'signup');
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (

        <>
        {loading ? (
            <div className='  mt-48 sm:mt-24'>
                <img src="https://i.ibb.co/ZhDP0qm/playmark-logo-final.png" className='animate-pulse mx-auto' alt="" />
                <div className='animate-bounce text-3xl text-slate-600 font-bold flex items-center justify-center pt-3 '><h1>Loading </h1><div><PulseLoader /></div></div>
                
            </div>
        ) : (
            <div>
            <QueryClientProvider client={queryClient}>
                <div>
                    {noHeaderFooter || <Navbar></Navbar>}
                    <Outlet></Outlet>
                    {noHeaderFooter || <Footer></Footer>}
                </div>
            </QueryClientProvider>

        </div> 
        )
        }
    </>
        
    );
};

export default Main;