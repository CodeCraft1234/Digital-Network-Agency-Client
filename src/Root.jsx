import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import ScrollTop from "./ScrollTop";
import Footer from "./Components/Footer/Footer";
import Rights from "./Components/Footer/Rights";
import SubNavbar from "./Components/Navber/SubNavbar";

const Root = () => {
  const location = useLocation();
  const noheaderfooter =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("search");

  return (
    <div className="bg-white">
      <ScrollTop />
      {/* SubNavbar visible on medium and large devices */}
      {!noheaderfooter && <SubNavbar className="hidden md:block" />}
      {!noheaderfooter && <NavBar />}
      <div className="min-h-screen mx-auto">
        <Outlet />
      </div>
      {!noheaderfooter && (
        <div>
          <Footer />
          <Rights />
        </div>
      )}
    </div>
  );
};

export default Root;
