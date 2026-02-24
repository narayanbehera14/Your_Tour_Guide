import React from "react";
import places from "../api/places";

const Resort = () => {
  const data = places.filter(p => p.category === "resort");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {data.map(item => (
        <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all cursor-pointer" key={item.id}>
          <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Resort;
