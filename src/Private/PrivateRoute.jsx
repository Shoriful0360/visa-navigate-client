import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
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
           {navigate('/login')}
        </div>
    );
};

export default PrivateRoute;