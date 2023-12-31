import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import MySelectedClass from "../Pages/DashBorad/Users/MySelectedClass";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import AddClass from "../Pages/DashBorad/Instructor/AddClass";
import MyClasses from "../Pages/DashBorad/Instructor/MyClasses";
import ManageUsers from "../Pages/DashBorad/Admin/ManageUsers";
import ManageClasses from "../Pages/DashBorad/Admin/ManageClasses";
import ErrorPage from "../Shared/ErrorPage";
import MyEnrolledClasses from "../Pages/DashBorad/Users/MyEnrolledClasses";
import PaymentHistory from "../Pages/DashBorad/Users/PaymentHistory";



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
        {
          path:'login',
          element:<Login></Login>
        },{
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'selectedClass',
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'addClass',
          element:<AddClass></AddClass>
        },
        {
          path:'myClasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'myEnrolledClasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);

