import { Helmet } from "react-helmet-async";
import LandingPage from "../../Components/Banner/LandingPage";
import DigitalMarketingMarketing from "../../Components/DigitalMarketingMarketing";
import GraphicDesignMarketing from "../../Components/GraphicDesignMarketing";
import Rating from "../../Components/Rating/Rating";
import HighlightClients from "../../Components/Services/HighlightClient";
import OurServices from "../../Components/Services/OurServices";
import WebDesignMarketing from "../../Components/WebDesignMarketing";
import TestimonialCarousel from "./TestimonialCarousel";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Payment from "../../Components/Payment/Payment";
import Cards from "../../components/Cards/Cards";
import Package from "../../Components/Package/Package";
import Domain from "../../Components/Domain";
import Choose from "../../Components/Choose";

const Home = () => {
  return (
    <div className="mt-16">
      <Helmet>
        <title>Digital Network| Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <LandingPage></LandingPage>
      <OurServices></OurServices>

      <WebDesignMarketing></WebDesignMarketing>
      <GraphicDesignMarketing></GraphicDesignMarketing>
      <DigitalMarketingMarketing></DigitalMarketingMarketing>
      <TestimonialCarousel></TestimonialCarousel>
      <HighlightClients></HighlightClients>
      <Rating></Rating>
      <WhyChooseUs></WhyChooseUs>
      <Payment></Payment>
      {/* <Package></Package> */}
      <Choose></Choose>
      <Domain></Domain>
    </div>
  );
};

export default Home;
