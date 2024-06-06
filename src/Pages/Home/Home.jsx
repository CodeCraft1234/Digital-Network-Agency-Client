import Banner from "../../Components/Banner/Banner";
import Carousel from "../../Components/Carousel/Caousel";
import ContactUS from "../../Components/ContactUs/ContactUS";
import Payment from "../../Components/Payment/Payment";
import Service from "../../Components/Services/Services";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    return (
        <div className="mt-36">
            <Banner></Banner>
            <Service></Service>
            <Cards></Cards>
            <Carousel></Carousel>
            <ContactUS></ContactUS>
            <Payment></Payment>
        </div>
    );
};

export default Home;