
import Banner from "../component/Banner";
import LatestVisas from "../component/LatestVisas";
import CountrySupport from "../component/CountrySupport";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Service from "../component/Service";
import Immigration from "../component/Immigration";

const Home = () => {
    const loadedvisa=useLoaderData()

    return (
        <div className="mt-10">
          <div >
          <h1 className="text-3xl text-center mb-3 font-bold">
                Welcome to{' '}
                <span style={{ color: 'blue' }}>
                    <Typewriter
                        words={['Our website', 'Visa Navigator']}
                        loop={0} // Loops 5 times
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
          </div>
        <Banner></Banner> 
        
       
        <Service></Service>
        <Immigration></Immigration>
    <div className="my-5">
    <LatestVisas loadedvisa={loadedvisa}></LatestVisas>
    <CountrySupport></CountrySupport>

    </div>
        </div>
    );
};

export default Home;