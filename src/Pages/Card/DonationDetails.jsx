import { Link } from "react-router-dom";


const DonationDetails = ({ filteredCards }) => {
  const { id, picture, title, description, price, text_button_bg_color } =
  filteredCards || {};
  console.log(filteredCards);



  return (
    <div className="container mx-auto mt-36 px-4 mb-16">
      {filteredCards.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <Link key={card.id} to={`/card/${card.id}`}>
              <div
                className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-4"
               
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
        <p>No cards found</p>
      )}
    </div>
  );
};

export default DonationDetails;
