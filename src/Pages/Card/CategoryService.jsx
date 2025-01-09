import React, { useState, useEffect } from "react";
import useWorks from "../../Hook/useWorks";

const CategoryService = () => {
  const [works] = useWorks(); // Fetch dynamic works data
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Category"); // Default category set to "All"

  // Get unique categories from works data, including "All"
  const categories = ["All Category", ...new Set(works?.map((work) => work.category))];

  useEffect(() => {
    // Filter works by active category
    if (activeCategory === "All Category") {
      setFilteredWorks(works); // Show all works for "All"
    } else {
      const filtered = works.filter((work) => work.category === activeCategory);
      setFilteredWorks(filtered);
    }
  }, [works, activeCategory]);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl text-center text-gray-700 font-bold my-10">
           Our Company & Clients
        </h2>
      {/* Category Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 m-4 items-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`text-black text-base sm:text-sm font-medium py-2 px-4 hover:text-red-600 relative ${
              activeCategory === category ? "text-red-600" : ""
            }`}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-600" />
            )}
          </button>
        ))}
      </div>

      <div className="my-5">
        <hr className="text-black" />
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center lg:grid-cols-4 gap-1">
        {filteredWorks.map((work) => (
          <a
            key={work._id}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-4  transition-shadow duration-300"
          >
            <img
              src={work.image}
              alt={work.category}
              className="w-20 h-28 mx-auto object-contain mb-4"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryService;
