import { useState } from "react";
import { Link } from "react-router-dom";
import places from "../api/places";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const filteredPlaces = places.filter((place) => {
    const categoryMatch =
      activeCategory.toLowerCase() === "all" ||
      place.category.toLowerCase() === activeCategory.toLowerCase();

    const searchMatch =
      normalize(place.name).includes(normalize(searchQuery)) ||
      normalize(place.city).includes(normalize(searchQuery)) ||
      normalize(place.category).includes(normalize(searchQuery));

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <div className="flex gap-4 px-10 py-5 overflow-x-auto">
        {["all", "Hotel", "Food", "Beach", "Museum"].map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border-2 font-semibold whitespace-nowrap transition-all ${
              activeCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-[#9e2a2b] text-white border-[#9e2a2b]"
                  : "bg-white text-gray-800 border-gray-300 hover:border-[#9e2a2b] hover:text-[#9e2a2b]"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Link
              to={`/place/${place.id}`}
              key={place.id}
              className="no-underline text-inherit"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all cursor-pointer">
                <div className="absolute top-8 left-8 flex gap-2 z-10">
                  <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ⭐ {place.rating}
                  </span>
                </div>

                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-110 transition-transform"
                />

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl text-[#9e2a2b] font-semibold m-0">{place.name}</h3>

                  <button
                    className="bg-white border border-[#9e2a2b] text-gray-900 px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-red-50 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${place.name} ${place.city}`,
                        "_blank"
                      );
                    }}
                  >
                    📍 Location
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No places found</p>
        )}
      </div>
    </>
  );
}