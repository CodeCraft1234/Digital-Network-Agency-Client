import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      const response = await fetch('/cards.json'); // Replace with your actual data fetching logic
      const data = await response.json();
      const cardDetail = data.find(card => card.id === id);
      setCard(cardDetail);
    };
    fetchCardDetails();
  }, [id]);

  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" ">
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Details</h1>
            <p className="mt-2">Home / Details</p>
          </div>
        </div>
      </section>
      <div className="relative flex flex-col mx-12 px-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        // style={{ backgroundColor: card.card_bg_color }}
      >
        <div className="relative h overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={card.picture} alt={card.title} className="h-[400px] w-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="p-4 flex-grow">
          <p className="mt-2 text-3xl text-[#0B0B0B] font-bold leading-normal antialiased mb-4">
            {card.title}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            {card.description}
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            ${card.price}
          </p>
          <button
            className="mt-4 px-6 py-2 text-lg font-medium leading-normal text-white rounded-lg shadow-md"
            style={{ backgroundColor: card.text_button_bg_color }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
