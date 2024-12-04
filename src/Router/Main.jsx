import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import VisaApplication from "../pages/VisaApplication";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        {
            path:'/allVisa',
            element:<AllVisa></AllVisa>
        },
        {
            path:'/addVisa',
            element:<AddVisa></AddVisa>
        },
        {
            path:'/myVisa',
            element:<MyAddedVisa></MyAddedVisa>
        },
        {
            path:'/visaApplication',
            element:<VisaApplication></VisaApplication>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
        ]
    }
])

export default router