import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/main/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import TremsAndCondition from "../pages/TermsAndCondition/TremsAndCondition";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/trems',
                element:<TremsAndCondition></TremsAndCondition>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }


        ]
    },
    {
        path:'*',
        element: <h2>404 This Element Not Found</h2>
    }

])