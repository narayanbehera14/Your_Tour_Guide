import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { FaMapMarkerAlt, FaStar, FaUtensils, FaHotel, FaLandmark, FaUmbrella, FaFootballBall, FaCameraRetro } from "react-icons/fa";
import places from "../api/places";

const getCategoryIcon = (category) => {
  const iconProps = { className: "text-xl" };
  switch (category.toLowerCase()) {
    case "restaurant":
      return <FaUtensils {...iconProps} />;
    case "hotel":
      return <FaHotel {...iconProps} />;
    case "museum":
      return <FaLandmark {...iconProps} />;
    case "beach":
      return <FaUmbrella {...iconProps} />;
    case "stadium":
      return <FaFootballBall {...iconProps} />;
    case "resort":
      return <FaHotel {...iconProps} />;
    case "food":
      return <FaUtensils {...iconProps} />;
    default:
      return <FaCameraRetro {...iconProps} />;
  }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [expandedLocation, setExpandedLocation] = useState(null);

  const locations = ["Mumbai", "Chennai", "Delhi", "Jaipur", "Pune"];

  const getCategoriesForLocation = (location) => {
    const uniqueCategories = [...new Set(
      places
        .filter((place) => place.city.toLowerCase() === location.toLowerCase())
        .map((place) => place.category)
    )];
    return uniqueCategories.map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1));
  };

  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const filteredPlaces = places.filter((place) => {
    const locationMatch =
      selectedLocations.length === 0 ||
      selectedLocations.some((loc) =>
        loc.toLowerCase() === place.city.toLowerCase()
      );

    const categoryMatch =
      selectedLocations.length > 0 ||
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        cat.toLowerCase() === place.category.toLowerCase()
      );

    const searchMatch =
      normalize(place.name).includes(normalize(searchQuery)) ||
      normalize(place.city).includes(normalize(searchQuery)) ||
      normalize(place.category).includes(normalize(searchQuery));

    return locationMatch && categoryMatch && searchMatch;
  });

  const handleLocationChange = (location, checked) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location));
    }
  };

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    }
  };

  const toggleLocation = (location) => {
    setExpandedLocation(expandedLocation === location ? null : location);
  };

  return (
    <div className="flex bg-gray-50">
      {/* sidebar */}
      <aside className="sidebar w-1/5 p-6 bg-white shadow-lg min-h-screen sticky top-0 overflow-auto border-r border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-[#9e2a2b] flex items-center gap-2">
          <FaMapMarkerAlt /> Filters
        </h2>
        <div className="space-y-3">
          {locations.map((loc) => (
            <div key={loc} className="">
              <button
                onClick={() => toggleLocation(loc)}
                className="w-full text-left px-4 py-3 bg-linear-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl hover:from-[#9e2a2b] hover:to-[#c23541] hover:text-white hover:border-[#9e2a2b] focus:outline-none focus:ring-2 focus:ring-[#9e2a2b] flex items-center justify-between font-semibold transition-all duration-200"
              >
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-base" />
                  {loc}
                </span>
                {expandedLocation === loc ? <AiOutlineDown /> : <AiOutlineRight />}
              </button>
              {expandedLocation === loc && (
                <div className="mt-2 pl-4 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <h4 className="text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">Categories</h4>
                  <div className="space-y-2">
                    {getCategoriesForLocation(loc).map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={(e) => handleCategoryChange(cat, e.target.checked)}
                          className="h-4 w-4 text-[#9e2a2b] bg-white border-gray-300 rounded focus:ring-[#9e2a2b] cursor-pointer"
                        />
                        <span className="flex items-center gap-2 capitalize text-gray-700 group-hover:text-[#9e2a2b] transition-colors">
                          {getCategoryIcon(cat)}
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setSelectedLocations([]);
            setSelectedCategories([]);
            setExpandedLocation(null);
            setSearchQuery("");
          }}
          className="mt-8 w-full bg-linear-to-r from-[#9e2a2b] to-[#c23541] text-white py-3 rounded-lg hover:from-[#7a2021] hover:to-[#a01a29] transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
        >
          Clear Filters
        </button>
      </aside>

      {/* main content */}
      <main className="main w-3/4 p-8">
        <div className="mb-8">
          <div className="relative">
            <AiOutlineSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search places, cities, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9e2a2b] focus:border-transparent text-lg transition-all duration-200 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Link
                to={`/place/${place.id}`}
                key={place.id}
                className="no-underline text-inherit"
              >
                <div className="group h-full bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56 bg-gray-200">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#9e2a2b] text-white rounded-full p-3 shadow-lg">
                        {getCategoryIcon(place.category)}
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <FaStar className="text-base" /> {place.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Place Name */}
                    <h3 className="text-xl font-bold text-[#9e2a2b] mb-2 line-clamp-2">
                      {place.name}
                    </h3>

                    {/* Category & City Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1">
                        {getCategoryIcon(place.category)}
                        <span className="capitalize font-medium">{place.category}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <FaMapMarkerAlt className="text-[#9e2a2b]" />
                        <span className="font-medium">{place.city}</span>
                      </div>
                    </div>

                    {/* Location Button */}
                    <button
                      className="w-full bg-linear-to-r from-[#9e2a2b] to-[#c23541] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#7a2021] hover:to-[#a01a29] transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${place.name} ${place.city}`,
                          "_blank"
                        );
                      }}
                    >
                      <FaMapMarkerAlt /> View on Maps
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full text-lg py-8">No places found</p>
          )}
        </div>
      </main>
    </div>
  );
}