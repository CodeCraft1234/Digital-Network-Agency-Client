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
            <DonationDetails filteredCards={filteredCards}></DonationDetails>
        </div>
    );
};

export default Card;