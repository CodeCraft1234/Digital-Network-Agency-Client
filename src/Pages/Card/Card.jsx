import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const Card = () => {
    const [filteredCards, setFilteredCards] = useState([]);
  const { category } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    console.log('Fetched Cards:', cards);
    console.log('Category from URL:', category);

    if (!cards) {
      console.error('No cards found.');
      return;
    }

    if (!category) {
      console.error('Category is not defined.');
      return;
    }

    if (!Array.isArray(cards)) {
      console.error('Cards is not an array:', cards);
      return;
    }

    const filtered = cards.filter(card => card.category === category);
    setFilteredCards(filtered);
    console.log('Filtered Cards:', filtered);
  }, [category, cards]);
    
    return (
        <div>
           <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{category}</h1>
            <p className="mt-2">Home / {category}</p>
          </div>
        </div>
      </section>
          <div className="mx-24">
          <DonationDetails filteredCards={filteredCards}></DonationDetails>
          </div>
           
        </div>
    );
};

export default Card;