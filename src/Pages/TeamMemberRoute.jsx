import "slick-carousel/slick/slick.css";
import useTeam from "../Hook/useTeam";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamMemberRoute = () => {
  const [team] = useTeam();

  return (
    <div className="lg:pt-36 container mx-auto px-5 pt-12">
      <section className="text-center my-12  lg:px-0">
       
        {/* ceo Carousel */}
        <h1 className="text-2xl font-bold lg:text-center lg:pt-0 pt-16 text-start text-gray-800  py-5">CEO & Founder</h1>
      <div className="flex justify-center ">
      {team?.filter(f=>f.skill === 'CEO & Founder')?.map((member, index) => (
            <div key={index} className="">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-4">
                  <h3 className="text-xl font-extrabold text-blue-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.skill}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaLinkedinIn />
                    </a>
                   
                  </div>
                </div>
              </div>
              
            </div>
          ))}
      </div>

        {/* Team Members Carousel */}
      <h1 className="text-2xl font-bold text-gray-800 text-start py-5">Digital Marketer</h1>
      <div className="grid lg:grid-cols-4 gap-4">
      {team?.filter(f=>f.skill === 'Digital Marketing')?.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.skill}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaLinkedinIn />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 text-start py-5">
        Graphic Designer
      </h1>
      <div className="grid lg:grid-cols-4 gap-4">
      {team?.filter(f=>f.skill === 'Graphic Design')?.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.skill}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaLinkedinIn />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 text-start py-5">
        Web Design & Developer
      </h1>
      <div className="grid lg:grid-cols-4 gap-4">
      {team?.filter(f=>f.skill === 'Web Development')?.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.skill}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaLinkedinIn />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </section>
    </div>
  );
};

export default TeamMemberRoute;
