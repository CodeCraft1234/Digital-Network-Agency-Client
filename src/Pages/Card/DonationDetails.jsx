import { Link } from "react-router-dom";
import Domain from "../../Components/Domain";


const DonationDetails = ({ filteredCards }) => {
 
  return (
    <div className="lg:px-12 mt-5 px-5  mb-16">
      
      {filteredCards.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => (
            <Link key={card.id} to={`/card/${card.id}`}>
              <div
                className="relative flex flex-col rounded-xl bg-indigo-100 bg-clip-border text-gray-700 shadow-xl p-4"
               
              >
                <div className="relative h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img src={card.picture} alt={card.title} className="h-full w-full object-cover" />
                  <div className="absolute bottom-2 left-0 w-full h-16 bg-black opacity-30"></div>
                </div>
                <div className="p-4 flex-grow">
                  <p className="mt-2 text-2xl text-[#0B0B0B] font-bold leading-normal antialiased mb-2">
                    {card.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Domain></Domain>
      )}
    </div>
  );
};

export default DonationDetails;
