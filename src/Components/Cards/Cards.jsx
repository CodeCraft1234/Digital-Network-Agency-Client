import { useLoaderData } from "react-router-dom";
import AllCards from "./AllCards";
import { useState } from "react";


const Cards = () => {
    const initialCards = useLoaderData();
    const [cards, setCards] = useState(initialCards);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        const filteredCards = initialCards.filter((card) =>
          card.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCards(filteredCards);
      };

      return (
        <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
          <div className="w-full md:w-2/5 flex mt-5 gap-5 mx-auto">
            <input
              type="text"
              name="name"
              id=""
              className="w-full md:flex-1 p-2 rounded-lg border-[1px solid #DEDEDE] bg-[#FFF] text-[rgba(11, 11, 11, 0.40)] text-sm"
              placeholder="Search here...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="w-full md:w-auto bg-[#FF444A] text-[#FFF] text-base font-semibold py-2  px-4 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {cards.length === 0 ? (
              <p className="text-center text-red-500">No data found.</p>
            ) : (
              cards?.map((card) => <AllCards key={card.id} card={card} />)
            )}
          </div>
        </div>
      );
    };

export default Cards;