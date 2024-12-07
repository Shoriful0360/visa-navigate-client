import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
   
    const{user,loading}=useContext(authContext)
    if(loading){
        return <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return (
        <div>
            {/* {children} */}
            <Navigate state={location.pathname}  to="/login" />
        </div>
    );
};

export default PrivateRoute;