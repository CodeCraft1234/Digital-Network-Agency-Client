import { Link } from "react-router-dom";

const Service = () => {
    
  const services = [
    { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
    { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
    { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
  ];

  return (
    <div className="mt-36">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 m-4">
          {services.map((service, index) => (
            <Link to={`/category/${service.category}`} key={index}>
            <div
              
              className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
            >
              <div className="mb-4">
                <img
                  className="w-8 h-8"
                  src={service.icon}
                  alt={service.category}
                />
              </div>
              <h6 className="text-xl font-semibold">{service.category}</h6>
            </div>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
