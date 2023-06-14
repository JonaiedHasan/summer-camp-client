/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import Instructors from '../Pages/Instructors/Instructors';
import { AuthContext } from '../Providers/AuthProviders';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isInstructors = false;
    const [isInstructor] = useInstructor();
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            {/* Branding & Profile Info */}

            <div className="drawer-side  ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80   bg-gray-400">

                    <div className='border-b-2 border-gray-500 mb-4'>
                        {/* <div className='w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
                    <Logo />
                </div> */}
                        <div className='flex flex-col items-center mt-6 -mx-2 mb-4'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>


               

                 

                    {/* {
                    isAdmin ? <>
                    
                    </> : <>
                    isInstructor ? <>
                    
                    </> : <>
                    
                    </></>
                 }   
                 {
      isAdmin ? <> </> : isInstructor ? <> </> : <></>
                 }    */}


                    {/* {
                    if (isAdmin) {
                        
                    }
                    if (isInstructor) {
                        
                    }
                    else{

                    }
                } */}

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
                        </> : isInstructor ? <>
                            <li><NavLink to='/dashboard/addClass'>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myClasses'>My Classes</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/selectedClass'>  <FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/myEnrolledClasses'>  <FaShoppingCart></FaShoppingCart>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'>  <FaWallet></FaWallet> Payment History</NavLink></li>
                        </>
                    }


                    {/* {
                        isAdmin ? <>

                            <li><NavLink to='/dashboard/manageclass'>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/manageUser'>Manage Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/selectedClass'>  <FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/home'>  <FaShoppingCart></FaShoppingCart>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/history'>  <FaWallet></FaWallet> Payment History</NavLink></li>



                        </>
                    } */}


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink> </li>
                    <li><NavLink to='/instructors'>Instructors</NavLink></li>
                    <li><NavLink to='/classes'>Classes</NavLink></li>
                </ul>
            </div>
        </div>



    );
};

export default DashBoard;