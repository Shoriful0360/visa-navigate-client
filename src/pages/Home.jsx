import { useContext } from "react";
import Banner from "../component/Banner";
import LatestVisas from "../component/LatestVisas";

const Home = () => {
    
    return (
        <div className="mt-10">
        <Banner></Banner> 
    <div className="my-5">
    <LatestVisas></LatestVisas>
    </div>
        </div>
    );
};

export default Home;