import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";



const HomeLayout = () => {
    return (
        <div className="">
        <header className=" w-full">
        <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-280px)] pt-40 px-4">
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </div>
    );
};

export default HomeLayout;