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



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
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
      children:[
        {
          path:'selectedClass',
          element:<MySelectedClass></MySelectedClass>
        }
      ]
    }
  ]);

