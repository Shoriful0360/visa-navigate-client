import { useContext } from "react";
import Banner from "../component/Banner";
import LatestVisas from "../component/LatestVisas";
import CountrySupport from "../component/CountrySupport";
import Text from "../component/Text";

const Home = () => {
    
    return (
        <div className="mt-10">
        <Banner></Banner> 
    <div className="my-5">
    <LatestVisas></LatestVisas>
    <CountrySupport></CountrySupport>
    <Text></Text>
    </div>
        </div>
    );
};

export default Home;