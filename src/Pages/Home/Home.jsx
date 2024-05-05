import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import Services from "./HomeComponents/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            This is home
        </div>
    );
};

export default Home;