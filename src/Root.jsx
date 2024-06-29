import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import ScrollTop from "./ScrollTop";
import { useContext } from "react";
import Footer from "./Components/Footer/Footer";
import { AuthContext } from "./Security/AuthProvider";


const Root = () => {
  const location = useLocation();
  const noheaderfooter =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("search");
    
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white">
      <ScrollTop />
      {!noheaderfooter && <NavBar />}
      <div className="min-h-screen max-w-auto ">
        <Outlet />
      </div>
      {!noheaderfooter && <Footer />}
    </div>
  );
};

export default Root;
