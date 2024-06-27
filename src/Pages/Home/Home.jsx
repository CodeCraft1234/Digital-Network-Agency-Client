import Award from "../../Components/Award";
import Banner from "../../Components/Banner/Banner";
import Carousel from "../../Components/Carousel/Caousel";
import Choose from "../../Components/Choose";
import ContactUS from "../../Components/ContactUs/ContactUS";
import Domain from "../../Components/Domain";
import Marketing from "../../Components/Marketing";
import Payment from "../../Components/Payment/Payment";
import Rating from "../../Components/Rating/Rating";
import Service from "../../Components/Services/Services";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    return (
        <div className="mt-36">
            <Banner></Banner>
            <Service></Service>
            <Cards></Cards>
            <Rating></Rating>
            <Carousel></Carousel>
            <Domain></Domain>
            <Marketing></Marketing>
            <Award></Award>
            <Choose></Choose>
            <ContactUS></ContactUS>
            <Payment></Payment>
        </div>
    );
};

export default Home;