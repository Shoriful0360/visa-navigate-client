import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src="https://i.ibb.co.com/FY4MsMv/404.gif" alt="" />
            </div>
            <div className="text-center ">
            <h1 className="text-red-600 text-center text-5xl"> Something is Wrong</h1>
            <p>Please go back</p>
            <Link to={'/'}><button className="btn bg-warning">Go back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;