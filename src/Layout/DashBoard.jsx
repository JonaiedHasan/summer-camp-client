/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import Instructors from '../Pages/Instructors/Instructors';

const DashBoard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isInstructors = false;
    const [isInstructor] = useInstructor();
    // const isUser = user;
    console.log( 'Instructors', isInstructor, 'admin', isAdmin);
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80   bg-gray-400">




                    {/* {

                   if (isUser === 'admin') {
                        <li><NavLink to='/dashboard/home'>  <FaHome></FaHome>Admin Home</NavLink></li>
                    }

          } */}

                    {/* {
                isAdmin ?( <></>) : (isInstructor ? (<></>) : (<></>))
               } */}

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
                            <li><NavLink to='/dashboard/home'>  <FaShoppingCart></FaShoppingCart>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/history'>  <FaWallet></FaWallet> Payment History</NavLink></li>
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