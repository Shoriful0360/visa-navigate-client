import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";



const HomeLayout = () => {
    return (
        <div>
        <header>
        <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </div>
    );
};

export default HomeLayout;