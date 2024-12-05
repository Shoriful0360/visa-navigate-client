import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import VisaApplication from "../pages/VisaApplication";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../Private/PrivateRoute";
import VisaDetails from "../component/VisaDetails";


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
              
            },
            {
                path:'/visaDetails/:id',
                element:<VisaDetails></VisaDetails>,
                loader:({params})=>fetch(`http://localhost:7000/visas/${params.id}`)
            },
        {
            path:'/allVisa',
            element:<AllVisa></AllVisa>
        },
        {
            path:'/addVisa',
            element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
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