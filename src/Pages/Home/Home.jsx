import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import LandingPage from "../../Components/Banner/MainBanner";
import HighlightClients from "../../Components/Services/HighlightClient";
import OurServices from "../../Components/Services/OurServices";
import Package from "../../Components/Package/Package";
import Choose from "../../Components/Choose";
import TeamMembers from "../TeamMembers";
import Services from "../Card/Services";
import PaymentSystem from "../../Components/Package/PaymentSystem";
import CategoryCarosel from "../../Components/Package/CategoryCarosel";
import CategoryService from "../Card/CategoryService";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/677a908baf5bfec1dbe6e13d/1igrc98i1";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function () {
          console.log("Tawk.to widget loaded");
          window.Tawk_API.setWidgetPosition("left");
        };
      }
    };

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="mt-16 bg-white my-16">
      <Helmet>
        <title>Digital Network | </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <LandingPage />
      <div className="mx-auto px-5 container">
        <Services/>
        <HighlightClients />
        <PaymentSystem></PaymentSystem>
        <Package />
        <TeamMembers />
        <Choose />
        <CategoryService></CategoryService>
      </div>
    </div>
  );
};

export default Home;
