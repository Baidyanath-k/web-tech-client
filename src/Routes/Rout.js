import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/main/Courses";
import DetailsCategory from "../pages/DetailsCategory/DetailsCategory";
import DetailsLearning from "../pages/DetailsLearning/DetailsLearning";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRout from "../pages/PrivateRout/PrivateRout";
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
                element:<Courses></Courses>,
                loader:()=>fetch(`https://assignment-learning-10-server.vercel.app/details`)
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
            },
            {
                path:'/details-category/:id',
                element:<PrivateRout><DetailsCategory></DetailsCategory></PrivateRout>,
                loader:({params})=>fetch(`https://assignment-learning-10-server.vercel.app/details-category/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRout><DetailsLearning></DetailsLearning></PrivateRout>,

                loader:({params})=>fetch(`https://assignment-learning-10-server.vercel.app/details/${params.id}`)
            },


        ]
    },
    {
        path:'*',
        element: <h2>404 This Element Not Found</h2>
    }

])