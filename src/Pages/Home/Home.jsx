import Award from "../../Components/Award";
import Banner from "../../Components/Banner/Banner";
import LandingPage from "../../Components/Banner/LandingPage";
import Carousel from "../../Components/Carousel/Caousel";
import Choose from "../../Components/Choose";
import ContactUS from "../../Components/ContactUs/ContactUS";
import DigitalMarketingMarketing from "../../Components/DigitalMarketingMarketing";
import Domain from "../../Components/Domain";
import GraphicDesignMarketing from "../../Components/GraphicDesignMarketing";
import Marketing from "../../Components/GraphicDesignMarketing";
import Payment from "../../Components/Payment/Payment";
import Rating from "../../Components/Rating/Rating";
import HighlightClients from "../../Components/Services/HighlightClient";
import OurServices from "../../Components/Services/OurServices";
import Service from "../../Components/Services/Services";
import WebDesignMarketing from "../../Components/WebDesignMarketing";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    return (
        <div className="mt-16">
            <LandingPage></LandingPage>
            <OurServices></OurServices>
          
            <WebDesignMarketing></WebDesignMarketing>
            <GraphicDesignMarketing></GraphicDesignMarketing>
            <DigitalMarketingMarketing></DigitalMarketingMarketing>
            <HighlightClients></HighlightClients>
            <Rating></Rating>
            <Domain></Domain>
        </div>
    );
};

export default Home;