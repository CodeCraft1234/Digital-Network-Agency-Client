import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import useService from "../../Hook/useService";

const Services = () => {
  const categories = [
    { btn: "All Services" },
    { btn: "Digital Marketing" },
    { btn: "Graphic Design" },
    { btn: "Web Design" },
  ];

  const [service] = useService();
  const [filteredServices, setFilteredServices] = useState(service);
  const [btns, setBtn] = useState("All Services"); // Default category filter

  useEffect(() => {
    if (btns === "All Services") {
      setFilteredServices(service);
    } else {
      const filtered = service?.filter((card) => card.category === btns);
      setFilteredServices(filtered);
    }
  }, [service, btns]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl text-center text-gray-700 font-bold my-10">
           Our Services
        </h2>
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:m-4 lg:my-10 items-center">
  {categories?.map((c) => (
    <button
      onClick={() => setBtn(c.btn)}
      className={`text-black text-base sm:text-sm font-medium py-2 px-4 hover:text-red-600 relative ${
        btns === c.btn ? "text-red-600" : ""
      }`}
      key={c.btn}
    >
      {c.btn}
      {btns === c.btn && (
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-600" />
      )}
    </button>
  ))}
</div>


<div className="my-5 ">
<hr className="text-black" />
</div>
      {/* Carousel */}
      <Slider {...settings}>
        {filteredServices?.map((item, index) => (
       <div key={index} className="px-2 ">
       <div className="bg-white shadow-lg border-gray-300 border rounded-xl h-[520px] overflow-hidden flex flex-col">
         <img
           src={item.picture || "placeholder.jpg"}
           alt={item.title || "Service"}
           className="w-full h-64  transition-transform duration-500 transform hover:scale-105"
         />
         <div className="p-6 flex flex-col flex-grow">
           <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-500 transition-colors duration-300">
             {item.title}
           </h2>
           <div className="flex items-center text-yellow-500 mb-4">
             {Array.from({ length: 5 }, (_, i) => (
               <span
                 key={i}
                 className={i < item.rating ? "fas fa-star" : "far fa-star"}
               ></span>
             ))}
             <span className="ml-3 text-gray-600 text-sm">
               {item.reviews} Reviews
             </span>
           </div>
           <p className="text-gray-700 mb-4 leading-relaxed">
             {item.description && item.description.split(' ').length > 0
               ? item.description.split(' ').slice(0, 15).join(' ') + "..."
               : "No description available"}
           </p>
           <div className="flex-grow"></div> {/* This is the flex-grow element to push the button to the bottom */}
           <div className="flex justify-between items-center mt-auto">
             <span className="text-xl font-semibold text-red-600">{`${
               item.price ? `$${item.price}` : "Price Unavailable"
             }`}</span>
             {
              item.category === 'Web Design' ? <Link
              to={`/web-design/${item._id}`}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-red-600 hover:to-orange-600 transition duration-300"
            >
              Live Demo
            </Link> : <Link
               to={`/card/${item._id}`}
               className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-red-600 hover:to-orange-600 transition duration-300"
             >
               Click for discount
             </Link>
             }
             
           </div>
         </div>
       </div>
     </div>
     
      
       
        ))}
      </Slider>
    </div>
  );
};

export default Services;
