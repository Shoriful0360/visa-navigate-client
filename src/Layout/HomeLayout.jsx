import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";



const HomeLayout = () => {
    return (
        <div>
        <header>
        <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </div>
    );
};

export default HomeLayout;