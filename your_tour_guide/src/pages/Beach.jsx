import React from "react";
import places from "../api/places";

const Beach = () => {
  const data = places.filter(p => p.category === "beach");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {data.map(item => (
        <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all cursor-pointer" key={item.id}>
          
          <div className="absolute top-8 left-8 flex gap-2 z-10">
            <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              ⭐ {item.rating}
            </span>
            <span className="bg-white text-blue-700 text-sm px-3 py-1 rounded-full">
              📍 {item.city}
            </span>
          </div>

          <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-110 transition-transform" />

          <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-lg">{item.description}</p>

        </div>
      ))}
    </div>
  );
};

export default Beach;
