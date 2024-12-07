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
import ErrorPage from "../pages/ErrorPage";


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
              loader:()=>fetch('http://localhost:7000/visas')
            },
            {
                path:'/visaDetails/:id',
                element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://visa-navigator-server-ten.vercel.app/visas/${params.id}`)
            },
        {
            path:'/allVisa',
            element:<PrivateRoute><AllVisa></AllVisa></PrivateRoute>
        },
        {
            path:'/addVisa',
            element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
        },
        {
            path:'/myVisa/:email',
            element:<PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
            loader:({params})=>fetch(`https://visa-navigator-server-ten.vercel.app/visas/${params.email}`)
        },
        {
            path:'/visaApplication/:email',
            element:<PrivateRoute><VisaApplication></VisaApplication></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:7000/apply/${params.email}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },


        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router