import Hero from "../components/Hero";
import Attraction from "../components/Attraction";
import AboutUs from "../components/AboutUs";

const Home = () => {  
    return (
        <>
            <Hero />
            <Attraction />
            <div className="border-dashed border-6 border-[#009387] my-15"></div>
            <AboutUs />
            <div className="border-dashed border-[6px] border-[#ED4690] my-19"></div>

        </>
    );
};

export default Home;