
import Banner from "../component/Banner";
import LatestVisas from "../component/LatestVisas";
import CountrySupport from "../component/CountrySupport";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedvisa=useLoaderData()

    return (
        <div className="mt-10">
        <Banner></Banner> 
    <div className="my-5">
    <LatestVisas loadedvisa={loadedvisa}></LatestVisas>
    <CountrySupport></CountrySupport>

    </div>
        </div>
    );
};

export default Home;