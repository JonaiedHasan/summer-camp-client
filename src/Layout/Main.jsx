/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const Main = () => {
    const queryClient = new QueryClient()

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login' || 'signup')
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <div>
                    {noHeaderFooter || <Navbar></Navbar>}
                    <Outlet></Outlet>
                    {noHeaderFooter || <Footer></Footer>}
                </div>
            </QueryClientProvider>

        </div>
    );
};

export default Main;