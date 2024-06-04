const Service = () => {
  const services = [
    { title: "Graphics & Multimedia", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
    { title: "Web & Software", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
    { title: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
  ];

  return (
    <div className="mt-36">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 m-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
            >
              <div className="mb-4">
                <img
                  className="w-8 h-8"
                  src={service.icon}
                  alt={service.title}
                />
              </div>
              <h6 className="text-xl font-semibold">{service.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
