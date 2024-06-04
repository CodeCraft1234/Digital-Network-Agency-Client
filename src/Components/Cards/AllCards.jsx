import { Link } from "react-router-dom";


const AllCards = ({card}) => {
    const { id, picture, title, category, category_bg_color,card_bg_color, text_button_bg_color, description, price } = card || {};

    return (
        <div>
            <Link to={`/card/${id}`}>
             <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
             style={{backgroundColor: card_bg_color}}
             >
        <div className="relative mx-4 mt-4 h-76 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <button style={{backgroundColor: card_bg_color, color:text_button_bg_color}} className="mt-2 block text-sm  font-medium leading-normal antialiased p-[2px] mb-2"
        
          >
            {category}
          </button>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed text-blue-gray-900 antialiased"
            style={{color: text_button_bg_color}}
            >
              {title}
            </p>
           
          </div>

        </div>
        
      </div>
      </Link>
    </div>
    );
};

export default AllCards;