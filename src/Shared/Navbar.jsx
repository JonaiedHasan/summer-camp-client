/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaFootballBall } from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => {

            });
    }


    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(user);

    return (
        <div className="mt-0">
            <div className="navbar bg-opacity-30 fixed z-10 bg-black text-white max-w-screen-xl px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu  menu-compact bg-slate-800 bg-opacity-50  dropdown-content mt-3 p-2 shadow rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink
                                    to="/instructors"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Instructors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/classes"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "default"
                                    }
                                >
                                    Classes
                                </NavLink>
                            </li>
                           
                        {
                             isAdmin ? <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/manageClasses'>DashBoard</NavLink></li>
                         </> : isInstructor ? <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/myClasses'>Dash Board</NavLink></li>
                         </> : <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/selectedClass'>Dash Board</NavLink></li>
                         </>
                           }

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">
                        <div className='w-24 flex items-center justify-center'>
                            
                            <img className='rounded-full' src={'https://i.ibb.co/wrdFJ6j/Cplsdjapture.png'} alt="" />
                        </div>
                        {" "}

                       
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li tabIndex={0}>
                            <NavLink
                                to="/instructors"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/classes"
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Classes
                            </NavLink>
                        </li>

                        {/* <li><NavLink className={({ isActive }) =>
                            isActive ? "active" : "default"
                        } to='/dashboard/manageClasses'>DashBoard</NavLink></li> */}

                        {
                             isAdmin ? <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/manageClasses'>DashBoard</NavLink></li>
                         </> : isInstructor ? <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/myClasses'>Dash Board</NavLink></li>
                         </> : <>
                             <li><NavLink  className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                } to='/dashboard/selectedClass'>Dash Board</NavLink></li>
                         </>
                           }
                    

                    </ul>
                </div>
                <div className="navbar-end flex sm:flex-col md:flex-row">
                    {user ? (
                        <div className="flex justify-center items-center">
                            {" "}
                            <div>

                            </div>
                            <div>
                                <button onClick={handleLogOut} className="btn-outlined">
                                    Sign Out
                                </button>
                            </div>
                            <div className="tooltip" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    className="w-12 h-12 rounded-full ml-4"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            {" "}
                            <NavLink to="/login">
                                <button className="btn-outlined">Log In</button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="btn-outlined">Sign Up</button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;