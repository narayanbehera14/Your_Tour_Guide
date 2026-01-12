import React from "react";
import places from "../api/places";

const Food = () => {
  const data = places.filter(p => p.category === "food");

  return (
    <div className="home-container">
      {data.map(item => (
        <div className="place-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Food;
